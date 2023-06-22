const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const IS_PROD = process.env.NODE_ENV === 'production';

/** @type {import('webpack').Configuration} */
const config = {
  mode: IS_PROD ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          IS_PROD ? MiniCSSExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve('./src/components'),
      validations: path.resolve('./src/validations'),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({ template: path.resolve('./src/index.html') }),
    ...(IS_PROD ? [new MiniCSSExtractPlugin()] : []),
  ],
};

module.exports = config;
