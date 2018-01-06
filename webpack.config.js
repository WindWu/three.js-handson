const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: 'bundle.js',
    library: 'TE',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    three: 'THREE',
    lodash: '_'
  },
  plugins: [
    new CopyWebpackPlugin([{
      context: './src',
      from: '**/*.html'
    },{
      context: './third_parties',
      from: '**/*.js'
    }])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 9000
  }
};