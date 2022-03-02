const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

const routes = require("./routes");

app.engine('hbs', engine({
    extname: "hbs",
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir:__dirname + '/views/partials',
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/public', express.static("public"));
app.use('/', routes);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })