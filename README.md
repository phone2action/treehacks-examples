# treehacks-examples

## **Legislators API**

Welcome to the Phone2Action Legislators API. We have opened up one of our core APIs for you to use. Phone2Action aggregates legislator data from many multiple sources to create the most complete legislator's database available. You'll be able to use this data to your advantage for your TreeHacks projects.

- **URL**

  ```
  https://q4ktfaysw3.execute-api.us-east-1.amazonaws.com/treehacks/legislators
  ```

- **Method:**

  ```
  GET
  ```

- **URL Params**

  **Required:**
  `address=[string]`

  **Optional:**
  `level=[string]`

- **Success Response:**

* **Code:** 200 <br />
  **Content:**

  ```
      {
          number : [int],
          officials: [array]
      }
  ```

* **Sample Call:**

  ```
  https://llqi9q94si.execute-api.us-east-1.amazonaws.com/dev/legislators?address=450+Serra+Mall,+Stanford,+CA+94305&level=NATIONAL_LOWER

  ```
