const webpack = require('webpack');
const merge = require('webpack-merge');


module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '8080',
    overlay: {
      errors: true,
      warnings: true,
    },
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}
