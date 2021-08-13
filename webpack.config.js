const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
      {test: /\.svg$/, use: 'svg-inline-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(js)$/, use: 'babel-loader'},
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  mode: 'production', // TODO: change to process.env
};
