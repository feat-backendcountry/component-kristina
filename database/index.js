const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/backcountry', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Not connected to database:', err);
  })

const productsSchema = mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  url: { type: String, require: true },
  // childCategory: { type: String, require: true},
  // parentCategory: { type: String, require: true},
  category: { type: String, require: true },
  productType: { type: String, require: true },
  brand: { type: String, require: true }
});

var Products = mongoose.model('Products', productsSchema);

module.exports = Products;