const path = require('path')

// (***)
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // (***) without options > no err > check dist/index.html
  plugins: [new htmlWebpackPlugin({})],
}
