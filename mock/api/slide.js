const breakpoints = [
  {
    title: '01',
    description: '未来科技有限公司',
    content: 'console.log(\'1\')'
  },
  {
    title: '02',
    description: '未来科技有限公司',
    content: 'console.log(\'2\')'
  },
  {
    title: '033333333333333333333',
    description: '未来科技有限公司',
    content: 'console.log(\'3\')'
  }
]

module.exports = (req, res) => {
  return res.json({
    id: 10086,
    title: '珂朵莉',
    description: 'Hello, world',
    breakpoints: breakpoints
  })
}
