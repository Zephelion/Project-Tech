const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Wagwan people');
});

app.get('/login', (req,res) => {
    res.status(200)
    res.send('hier zal je uiteindelijk moeten inloggen');
})

app.get('/about', (req,res) => {
    res.send('hier komt de about');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })