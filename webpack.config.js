const path = require('path')


module.exports = {
    entry: './assets/index.js', // our input file(s)
    output: {
        filename: 'index-bundle.js',
        path: path.resolve(__dirname, './static'),
    },
      module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
    ]
  }
};