const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueWebpackPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: ['style-loader', 'css-loader']},
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.(jpg|pen|svg|bmp|ttf)/,use: 'file-loader'}
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new vueWebpackPlugin()
  ],
  devServer: {}
}