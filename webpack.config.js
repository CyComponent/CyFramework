var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src/CyFramework.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    library: "CyFramework",
    libraryTarget: "umd",
    filename: "CyFramework.js"
  },
  externals: {
    "react":"React",
    "react-dom":"ReactDOM"
  },
  resolve: {
    root: __dirname,
    moduleDirectories: ["node_modules", "./src"]
  },
  module: {
    loaders: [
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loaders: ['babel?presets[]=es2015']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        loaders: ["url"]
      }

    ]
  }
};
