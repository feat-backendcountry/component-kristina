const mongoose = require('mongoose');
const Product = require('./index.js');

var productTypes = require('./images.js');

var descriptions = [
  'Atlantic TLS3',
  'Icelandic ',
  'Wilshire',
  'Mosaic Trident',
  'Peak Performance Odyssey',
  'Hyper Blaze IC',
  'Condor',
  'Esk Forge',
  'High Impact Toucan',
  'Athena',
  'Classic Athens',
  'Soaring Balance',
  'Serenity',
  'Asterisk',
  'Pinnacle Cove',
  'Zip Discover',
  'NextGen',
  'OffRoad',
  'Totem',
  'Salamachu',
  'Bolohock',
  'Nompochock',
  'Onehackhonhuh',
  'Awkun',
  'Chombriep',
  'Suo',
  'Igloo',
  'NewWord',
  'Solaris',
  'Compact Retro',
  'Atlas',
  'Chameleon',
  'ICIC',
  'Vita Versus',
  'Raven',
  'Norwalk'
];

var categories = [
  'Men\'s Clothing',
  'Women\'s Clothing',
  'Men\'s Accessories',
  'Women\'s Accessories',
  'Bike',
  'Ski',
  'Snowboard',
  'Baselayers'
];

// var childCategories = [
//   'Bike',
//   'Ski',
//   'Snowboard',
//   'Baselayers'
// ];

var brands = [
  'Arc\'teryx',
  'Black Diamond',
  'Backcountry',
  'Columbia',
  'Jade Yoga',
  'Keen',
  'Marmot',
  'Mountain Hardwear',
  'Patagonia',
  'Prana',
  'The North Face'
];

var seedData = [];

var returnRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
}

var buildSeedData = (productTypes) => {

  var makeItemEntries = (item, itemUrls) => {
    for (var i = 0; i < itemUrls.length; i++) {
      var entry = {};
      // var nameExtension = '';

      productType = `${item.toLowerCase()}s`;
      category = categories[returnRandomIndex(categories.length - 1)];
      // childCategory = childCategories[returnRandomIndex(childCategories.length - 1)]
      brand = brands[returnRandomIndex(brands.length - 1)];
      // nameExtension = category.split(' ')[0];
      description = descriptions[returnRandomIndex(descriptions.length - 1)];

      entry.id = id;
      // entry.name = `${description} ${item} - ${nameExtension}`;
      entry.name = `${description} ${item}`;
      entry.url = itemUrls[i];
      // entry.childCategory = childCategory;
      entry.category = category;
      entry.productType = productType
      entry.brand = brand;

      seedData.push(entry);
      id++;
    }
  }

  var id = 1;
  var keys = Object.keys(productTypes);
  for (var i = 0; i < keys.length; i++) {
    makeItemEntries(keys[i], productTypes[keys[i]]);
  }
}

const seedFunction = () => {
  Product
    .create(seedData)
    .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

buildSeedData(productTypes);
seedFunction();
// console.log(seedData);