const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { engine } = require ('express-handlebars');
const methodOverride = require('method-override');

const route = require('./router');
const db = require("./confix/db");

db.conner();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'))

route(app);

app.use(morgan('combined'));

app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a+b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

const PORT = process.env.port || 3000;
app.listen(PORT);
console.log("http://localhost:3000/")