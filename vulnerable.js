// ADS observe test edit
const express = require('express');
const mysql = require('mysql');
const _ = require('lodash');
const escapeHtml = require('escape-html');

const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb',
});

app.get('/user', (req, res) => {
  const userId = req.query.id;

  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    res.json(results);
  });
});

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;

  const query = 'SELECT * FROM products WHERE name LIKE ?';
  db.query(query, ['%' + searchTerm + '%'], (err, results) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    res.json(results);
  });
});

app.get('/greet', (req, res) => {
  const name = req.query.name;

  const safeName = escapeHtml(name);
  res.send('<html><body><h1>Hello, ' + safeName + '!</h1></body></html>');
});

app.get('/comment', (req, res) => {
  const comment = req.query.text;

  const safeComment = escapeHtml(comment);
  res.send(
    '<div class="comment">' +
      safeComment +
      '</div><script>document.title = "' +
      safeComment +
      '"</script>'
  );
});

app.get('/merge', (req, res) => {
  const userInput = req.query.config;

  // Prototype pollution via vulnerable lodash merge
  const config = {};
  _.merge(config, JSON.parse(userInput || '{}'));
  res.json(config);
});

app.listen(3000, () => {
  console.log('Vulnerable app listening on port 3000');
});
