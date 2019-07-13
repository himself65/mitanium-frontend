const path = require('path')

// this file is for WebStorm webpack loader which can display correct code highlighting
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../', 'src'),
      'views': path.resolve(__dirname, '../', 'src', 'views'),
      'config': path.resolve(__dirname, '../', 'config.js')
    }
  }
}
