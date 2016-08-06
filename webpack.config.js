var path = require('path')
var webpack = require('webpack')
module.exports = { 
  cache: true,
  devtool: 'source-map',
  entry: path.resolve(__dirname, "src/CyFramework.js"),
  output: { 
    path: path.resolve(__dirname, "build"),
    library: "CyFramework",
    libraryTarget: "umd",
    filename: "CyFramework.js" 
  }, 
  resolve: {
    root: __dirname,
    moduleDirectories: ["node_modules", "./src"],
    extensions: ["", ".js", ".webpack.js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: require.resolve("react"),
        loader: 'expose?React'
      },
      {
        test: require.resolve("react-dom"),
        loader: 'expose?ReactDOM'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
