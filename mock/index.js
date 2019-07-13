const path = require('path')
const express = require('express')

const app = express()
app.use(express.static(path.resolve(__dirname, '../', 'dist')))
app.listen(3000, function () {
  console.log('Mock load success on port 3000!')
})
