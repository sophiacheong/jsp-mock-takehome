const path = require('path');

const DIST_DIR = path.join(__dirname, '/client/dist');
const SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  entry: `${SRC_DIR}/Index.jsx`,
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['babel-plugin-transform-object-rest-spread', 'transform-class-properties'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  watchOptions: {
    poll: true,
  },
  watch: true,
};