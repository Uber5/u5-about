const path = require('path')
const execSync = require('child_process').execSync
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: path.resolve(__dirname, './app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.')
  },
  devServer: {
    contentBase: path.join(__dirname, '.'),
    inline: true,
    // contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      REACT_VERSION: JSON.stringify(require('../package.json').devDependencies.react),
      BUILT_AT: JSON.stringify(new Date().getTime()),
      BUILT_ON: JSON.stringify(execSync('hostname').toString().trim()),
      REVISION: JSON.stringify(execSync('git rev-parse --short HEAD').toString().trim()),
      OTHER_PROP: JSON.stringify("This could be anything"),
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname),
          path.resolve(__dirname, '..', 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: "babel-loader",
        options: {
          presets: [ "es2015", "react", "stage-2" ]
        }
      }
    ]
  }
}
