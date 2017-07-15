const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './app')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /(\.css|\.scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader?-url',
          use: 'css-loader?-url!sass-loader?-url'
        })
      }
      // ,
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader?classPrefix!../node_modules/styleguide/export/images/icons.svg'
      // }

      // ,
      // { test: /\.css$/, use: [ 'style-loader', 'css-loader?-url', 'sass-loader?-url' ]}
    ]
  },
  plugins: [
    new ExtractTextPlugin('extracted.css'),
    // Make sure this is after ExtractTextPlugin!
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: [path.join(__dirname, 'app/index.html')]
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

// if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
    // ,
    // new webpack.optimize.UglifyJsPlugin()
  )
// }

module.exports = config;
