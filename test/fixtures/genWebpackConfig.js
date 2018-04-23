const path = require('path');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin'); // for webpack 3 / 4.x

module.exports = (name = 'without.js') => ({
  entry: `./test/fixtures/${name}`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: name.replace('.js', '.min.js')
  },
  plugins: [new UnminifiedWebpackPlugin()]
});
