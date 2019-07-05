const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const Products = require('./index.js');

const app = express();
const port = 3838;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));

app.listen(port, () => console.log(`Connected and listening on port: ${port}`));