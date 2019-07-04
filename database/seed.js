const mongoose = require('mongoose');
const Product = require('./index.js');


const name = [];
const url = [];
const category = [
  'Men\'s Clothing',
  'Women\'s Clothing',
  'Men\'s Accessories',
  'Women\'s Accessories',
  'Bike',
  'Ski',
  'Snowboard',
  'Tops',
  'Pants',
  'Baselayers',
];
const brand = [
  'Arc\'teryx',
  'Black Diamond',
  'Backcountry',
  'Columbia',
  'Clifbar',
  'Jade Yoga',
  'Keen',
  'Mountain Hardwear',
  'Patagonia',
  'Prana',
  'The North Face'
];

var seedData = []
var entry = {};

var createSeedData = (name, url, category, brand) => {
  for (var i = 1; i <= 100; i++) {
    entry.id = i;
      // entry.name = name[i];
      // entry.url = url[i];
    entry.category = category[Math.floor(Math.random() * (category.length - 1))];
    entry.brandName = brand[Math.floor(Math.random() * (brand.length - 1))];
    seedData.push(entry);
    entry = {};
  }
}

const seedFunction = () => {
  Product.create(seedData)
    .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

createSeedData(name, url, category, brand);
seedFunction();