const mongoose = require('mongoose');
const Product = require('./index.js');
const productTypes = require('./images.js');

const descriptions = [
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
  'Norwalk',
  'Soksabai',
  'KeOokke',
  'Sahoa',
  'Menten',
  'Loy',
  'Chommai',
  'Vie',
  'LooLen',
  'Lenkeem'
];

const parentCategories = [
  'Women\'s Clothing',
  'Women\'s Accessories',
  'Men\'s Clothing',
  'Men\'s Accessories'
];

const childCategories = [
  'Bike',
  'Ski',
  'Snowboard',
  'Camping',
  'Baselayers'
];


const brands = [
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

const seedData = [];

const returnRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
}

const buildSeedData = (productTypes) => {

  const makeItemEntries = (item, itemUrls) => {
    for (let i = 0; i < itemUrls.length; i++) {
      let entry = {};

      let productType = `${item.toLowerCase()}s`;
      let childCategory = childCategories[returnRandomIndex(childCategories.length - 1)];
      let brand = brands[returnRandomIndex(brands.length - 1)];
      let description = descriptions[returnRandomIndex(descriptions.length - 1)];

      if (i <= Math.floor(itemUrls.length / 2)) {
        parentCategory = parentCategories[returnRandomIndex(parentCategories.length / 2)];
      } else {
        parentCategory = parentCategories[returnRandomIndex(parentCategories.length / 2) + parentCategories.length / 2]
      }

      entry.id = id;
      entry.name = `${description} ${item}`;
      entry.url = itemUrls[i];
      entry.parentCategory = parentCategory;
      entry.childCategory = childCategory;
      entry.productType = productType
      entry.brand = brand;

      seedData.push(entry);
      id++;
    }
  }

  let id = 1;
  let keys = Object.keys(productTypes);
  for (let i = 0; i < keys.length; i++) {
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