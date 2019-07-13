const breakpoints = [
  {
    title: '奴隶阿飞的传奇人生01',
    description: '未来科技有限公司',
    content: 'console.log(\'1\')'
  },
  {
    title: '奴隶阿飞的传奇人生02',
    description: '未来科技有限公司',
    content: 'console.log(\'2\')'
  },
  {
    title: '奴隶阿飞的传奇人生03',
    description: '未来科技有限公司',
    content: 'console.log(\'3\')'
  }
]

module.exports = (req, res) => {
  return res.json({
    id: 10086,
    title: '珂朵莉',
    description: 'Hello, world',
    breakpoints: res.json(breakpoints)
  })
}
