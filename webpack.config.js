const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './assets/index.tsx', // our input file(s)
    output: {
        filename: 'index-bundle.js',
        path: path.resolve(__dirname, './static'),
    },
    module: {
        rules: [
            {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
            },
        ],
    },
resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
},
  optimization: {
    minimize: true,
  },
  plugins: [
   /* new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        //NODE_ENV: JSON.stringify("production"),
      },
    }),
    */
  ],

};