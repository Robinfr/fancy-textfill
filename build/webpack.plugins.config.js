const { webpack } = require('@webpack-blocks/webpack2')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.basePlugins = [
  new HtmlWebpackPlugin({
    inject: false,
    template: './src/index.html'
  })
]

exports.productionPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    },
    screwIe8: true,
    sourceMap: false
  })
]
