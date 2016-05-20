var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/router'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /(\.js$|\.jsx$)/,
      loader: 'babel',
      include: path.join(__dirname, 'client'),
      query: {
        presets: ['react', 'es2015', 'stage-0', 'react-hmre']
      }
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
