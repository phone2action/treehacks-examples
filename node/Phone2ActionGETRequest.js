// We'll use Axios to make our HTTP Request, install with NPM or Yarn!
var Axios = require('axios')

// Our Phone2Action API Key goes here
// Super important, we need this to show that we're authorized to make our request
var xAPIKey = '' // Should not be empty, see the README for info on how to get an API Key

Axios.defaults.headers.common['X-API-Key'] = xAPIKey // We apply the API Key to Axios
// We're changing the defaults, so every HTTP Request Axios sends will include the API Key!

// First, we define our base URL and our parameters
// Our parameters can be a JSON, since Axios will convert them
var baseURL = 'https://fmrrixuk32.execute-api.us-east-1.amazonaws.com/hacktj/legislators'
var parameters = {
  'level': 'NATIONAL_LOWER',
  'address': '6560 Braddock Rd'
}

// Now, we're able to fire the configured HTTP GET request
// Axios uses JavaScript Promises, so it'll call `.then()` when done
Axios.get(baseURL, {
  params: parameters
}).then(function(response) {
  var representatives = response.data.officials
  // Finally, we pick out the data we want and print it to the console
  // Use Postman to figure out what format your data is in and access it accordingly
  representatives.forEach(function(representative) {
    var firstName = representative['first_name']
    var lastName = representative['last_name']
    console.log('Your Representative in national Congress is', firstName, lastName)
  })
})