const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js', // entry 1
    product: './src/products.js', // entry 2
  },
  output: {
    filename: 'bundle.js', // error > since we have 2 entry files
    path: path.resolve(__dirname, 'dist'),
  },
}
