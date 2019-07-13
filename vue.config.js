const webpackConfig = require('./build/webpack.dev.config')

module.exports = {
  assetsDir: 'public',

  configureWebpack: {
    ...webpackConfig
  },

  pwa: {
    name: 'mitanium',
    theme_color: '#6cb2eb'
  },

  devServer: {
    proxy: `http://localhost:3000`
  }
}
