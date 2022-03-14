const path = require('path')
const sitePath = path.resolve(__dirname, './')

// TODO => check for the hot reload
module.exports = {
  mode: 'development',

  devServer: {
    static: {
      directory: sitePath,
      watch: true,
    },
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.d\.ts$/,
      },
      {
        test: /(?<!\.d)\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: 'url-loader?mimetype=image/png',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.d.ts', '.js', '.css', '.png'],
    alias: {},
  },
  entry: { main: './src/index.ts' },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
