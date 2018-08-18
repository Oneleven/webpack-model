const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: './dist'
  },
    
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|svg|jpg|gif|jpeg)$/i,
        use: [
          'file-loader',{
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
}