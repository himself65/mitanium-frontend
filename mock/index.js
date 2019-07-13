const path = require('path')
const express = require('express')
const root = path.resolve(__dirname, '../', 'dist')
const app = express()

app.get(/\/api\/slide/, require('./api/slide'))
app.use(express.static(root))
app.listen(3000, function () {
  console.log('Mock load success on port 3000!')
})
