const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const Products = require('../database/index.js');

const app = express();
const port = 3838;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));

app.get('/products/all', (req, res) => {
  Products
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})

app.listen(port, () => console.log(`Connected and listening on port: ${port}`));