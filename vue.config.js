const webpackConfig = require('./build/webpack.dev.config')

const isMock = process.env.TARGET === 'mock'

module.exports = {
  assetsDir: 'public',

  configureWebpack: {
    ...webpackConfig
  },

  pwa: {
    name: 'Himself65',
    theme_color: '#6cb2eb'
  },

  devServer: {
    proxy: `http://localhost:300${isMock ? 1 : 0}`
  }
}
