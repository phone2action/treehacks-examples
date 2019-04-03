// We'll use Axios to make our HTTP Request, install with NPM or Yarn!
var Axios = require('axios')

// First, we define our base URL and our parameters
// Our parameters can be a JSON, since Axios will convert them
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

// Now, we're able to fire the configured HTTP GET request
// Axios uses JavaScript Promises, so it'll call `.then()` when done
Axios.get(baseURL, {
  params: parameters
}).then(function(response) {
  var pages = response.data.query.pages
  var pageKeys = Object.keys(pages)
  // Finally, we pick out the data we want and print it to the console
  // Use Postman to figure out what format your data is in and access it accordingly
  pageKeys.forEach(function(pageKey) {
    console.log('Full Title:', pages[pageKey].title)
    console.log()
    var introduction = pages[pageKey].extract.replace('\n', ' ')
    console.log('Introduction', introduction)
    console.log()
  })
})