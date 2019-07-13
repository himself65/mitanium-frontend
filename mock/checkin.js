module.exports = (req, res) => {
  const { id = undefined } = req.query
  if (id) {
    res.json({
      '761282619': { 'rating': 51, 'times_all': 2, 'times_month': 2, 'date': '2018-12-08' },
      '1231231': { 'rating': 39, 'times_all': 2, 'times_month': 2, 'date': '2018-12-08' },
      '3111': { 'rating': 24, 'times_all': 1, 'times_month': 1, 'date': '2018-12-08' },
      '4111': { 'rating': 10, 'times_all': 1, 'times_month': 1, 'date': '2018-12-08' },
      '51231': { 'rating': 19, 'times_all': 1, 'times_month': 1, 'date': '2018-12-09' },
      '631231': { 'rating': 18, 'times_all': 1, 'times_month': 1, 'date': '2018-12-08' },
      '7423412': { 'rating': 107, 'times_all': 5, 'times_month': 5, 'date': '2018-12-10' }
    })
  } else {
    res.json(['1', '2222', '333'])
  }
}
