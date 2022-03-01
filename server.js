const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('hbs', engine({
    extname: "hbs",
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir:__dirname + '/views/partials',
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/public', express.static("public"));



app.get('/', (req,res) => {
    res.render('start');
});

app.get('/register', (req,res) => {
    res.status(200)
    res.render('register');
})

app.get('/about', (req,res) => {
    res.send('hier komt de about');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })