// S-16 fixture — INTENTIONALLY VULNERABLE (SQL injection) for ADS Hooks Enforcement test.
// Do not use in production. Created to trigger Secure-at-Inception hook enforcement.
const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({ host: 'localhost', user: 'root', database: 'app' });

app.get('/user', (req, res) => {
  // Vulnerable: req.query.id concatenated directly into SQL string
  const query = "SELECT * FROM users WHERE id = '" + req.query.id + "'";
  db.query(query, (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

app.listen(3000);
