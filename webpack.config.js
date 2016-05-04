var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src/app.jsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    library: "CytoFramework",
    libraryTarget: "umd",
    filename: "cyto.js"
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
         loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
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
