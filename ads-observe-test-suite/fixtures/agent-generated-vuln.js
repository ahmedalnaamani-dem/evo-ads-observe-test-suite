const express = require('express');
const mysql = require('mysql');
const app = express();

// ADS Hooks Enforcement test — intentionally vulnerable, do not fix
app.get('/user', (req, res) => {
  const connection = mysql.createConnection({ host: 'localhost', user: 'root' });
  const sql = "SELECT * FROM users WHERE id = '" + req.query.id + "'";
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = app;
