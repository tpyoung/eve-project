var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    
    './client/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
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
