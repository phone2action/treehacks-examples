# We'll use the `requests` module to make our HTTP Request 
import requests

# We'll use the `json` module to format our response's data
import json

# First, we define our base URL and our parameters
# Our parameters can be a Dictionary, since the `requests` module converts them
endpoint = 'https://en.wikipedia.org/w/api.php'
parameters = {
  'format': 'json',
  'action': 'query',
  'redirects': 1,
  'prop': 'extracts',
  'exintro': 1,
  'explaintext': 1,
  'titles': 'tjhsst'
}

# Now, we're able to fire the configured HTTP GET request
response = requests.get(endpoint, params=parameters)

# Next, we convert the response to a JSON with `json.loads()`
pages = json.loads(response.text)['query']['pages']

# Finally, we pick out the data we want and print it to the console
# Use Postman to figure out what format your data is in and access it accordingly
for key in pages.keys():
    print('Full Title: ' + pages[key]['title'])
    print('')
    introduction = pages[key]['extract'].replace('\n', ' ')
    print('Introduction: ' + introduction)
    print('')
    