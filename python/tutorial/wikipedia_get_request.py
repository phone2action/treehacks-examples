# We use the `requests` module to make our HTTP Request 
import requests

# We use the `json` module to format our response's data
import json

base_API = 'https://en.wikipedia.org/w/api.php'
parameters = {
  'format': 'json',
  'action': 'query',
  'redirects': 1,
  'prop': 'extracts',
  'exintro': 1,
  'explaintext': 1,
  'titles': 'tjhsst'
}

response = requests.get(base_API, params=parameters)
pages = json.loads(response.text)['query']['pages']

for key in pages.keys():
    print('Full Title: ' + pages[key]['title'])
    print('')
    introduction = pages[key]['extract'].replace('\n', ' ')
    print('Introduction: ' + introduction)
    print('')
