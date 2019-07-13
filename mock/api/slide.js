const fs = require('fs')
const path = require('path')

const dir = path.resolve(__dirname, '../../deps/Manim.js/Linear Regression')

const regex = /chapter_[0-9]\.js/

const breakpoints = fs.readdirSync(dir).map(file => regex.test(file) ? file : false)
  .filter(v => v).map((item, index) => {
    return {
      title: `第 ${index} 章`,
      content: fs.readFileSync(path.resolve(dir, item), 'utf-8')
    }
  })

module.exports = (req, res) => {
  return res.json({
    id: 10086,
    title: '珂朵莉',
    description: 'Hello, world',
    breakpoints: breakpoints
  })
}
