# Sample Code

We have two sample apps in the `examples` directory, check them out!

# NodeJS GET Requests

## Wikipedia API GET Request: 

Run `WikipediaGETRequest.js`. Make sure to install Axios first!

## Phone2Action API GET Request:

First, make sure you have a valid Phone2Action API Key. If you don't have one, text `HACKTJ19` to `52886` on your phone to receive yours. Then, in line 8 of `Phone2ActionGETRequest.js`. change the value to your Phone2Action API Key.

So, if your Phone2Action API Key is `abcdefg`, line 8 in `Phone2ActionGETRequest.js` should look something like this:

```
Axios.defaults.headers.common['X-API-Key'] = 'abcdefg'
```
Make sure you've installed Axios!

Run `Phone2ActionGETRequest.js`; you should see information about the Representative in national Congress for TJHSST's district print to your console. 

## Note: 

[Axios](https://github.com/axios/axios) is an external dependency which we use to make our HTTP requests. You can install it with [NPM](https://www.npmjs.com/get-npm) (`npm install axios`) or, preferably, [Yarn](https://yarnpkg.com/en/docs/install) (`yarn add axios`). If Axios isn't running properly on your system, these programs won't run.