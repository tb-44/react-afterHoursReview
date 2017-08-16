const products = require('./data.js');

module.exports = {
  getProducts :  (req, res) => {
    res.send(products.products)
  }
}
