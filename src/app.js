const express = require('express');
const app = express();
const PORT = 3001;

app.get('/task/1l', (req, res) => {
  res.send('Hello from Task 1L');
});

app.get('/task/1h', (req, res) => {
  res.send('Hello from Task 1H');
});

app.listen(PORT, () => {});
