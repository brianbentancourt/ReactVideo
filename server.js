const express = require('express');
const data = require('./src/api.json');
const app = express();

var port = process.env.PORT || 9000;

app.get('/dist/css/home.css', (req, res) => {
  res.sendFile('./dist/css/home.css', {root: __dirname });
})

app.get('/dist/js/home.js', (req, res) => {
  res.sendFile('./dist/js/home.js', {root: __dirname });
})

app.get('/images/logo.png', (req, res) => {
  res.sendFile('./images/logo.png', {root: __dirname });
})

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname });
})

app.listen(port, () => {
    console.log('Corriendo servidor en puerto', port);
});
