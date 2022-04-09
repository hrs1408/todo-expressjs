const express = require('express');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => { console.log(`Server is running on port ${port}`) });

app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/product", (req, res) => {
    res.render('product');
});

