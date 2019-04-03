# Python GET Requests

## Wikipedia API GET Request: 

Run `wikipedia_get_request.py`. You shouldn't need any external dependencies.

## Phone2Action API GET Request:

First, make sure you have a valid Phone2Action API Key. If you don't have one, text `HACKTJ19` to `52886` on your phone to receive yours. Then, in line 9 of `phone2action_get_request.py`. change `x_api_key` to your Phone2Action API Key.

So, if your Phone2Action API Key is `abcdefg`, line 9 in `phone2action_get_request.py` should look something like this:

```
x_api_key = 'abcdefg'
```

Run `Phone2ActionGETRequest.java`; you should see information about the Representative in national Congress for TJHSST's district print to your console.

## Note: 

Python version 3 (or greater) is required; if you only have Python 2 installed, this code won't work. You can download Python 3.7.3 [here](https://www.python.org/downloads/release/python-373/).

Some systems have both Python 2 and 3 installed (if you have macOS installed, the default Python version is Python 2, and you can't remove it), and it's important to make sure that you're using Python 3. If you're using an IDE (like PyCharm) to run your app, it should give you the option to select Python 3. If you're using the command line to run your app, just call `python3 app.py` instead of `python app.py`.