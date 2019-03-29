var Axios = require('axios')

var baseURL = 'https://en.wikipedia.org/w/api.php'
var parameters = {
  'format': 'json',
  'action': 'query',
  'redirects': 1,
  'prop': 'extracts',
  'exintro': 1,
  'explaintext': 1,
  'titles': 'tjhsst'
}

Axios.get(baseURL, {
  params: parameters
}).then(function(response) {
  var pages = response.data.query.pages
  var pageKeys = Object.keys(pages)
  pageKeys.forEach(function(pageKey) {
    console.log('Full Title:', pages[pageKey].title)
    console.log()
    var introduction = pages[pageKey].extract.replace('\n', ' ')
    console.log('Introduction', introduction)
    console.log()
  })
})