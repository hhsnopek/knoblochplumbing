module.exports = {
  parser: 'sugarss',
  plugins: [
    require('precss'),
    require('postcss-calc'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
  ],
}
