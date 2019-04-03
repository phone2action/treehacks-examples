# HackTJ × Phone2Action

## **Code Examples and Sample Apps**

These are the code snippets and sample apps we discuss in our workshop *Integrating Data from the Web Into Your App*; feel free to use these as a base for your project.

* **Java**: HTTP GET Request, Sample App
* **Python**: HTTP GET Request, Sample App
* **NodeJS**: HTTP GET Request, Messenger Bot, Web App

## **Legislators API**

We've opened up one of our core APIs for you to use. Phone2Action aggregates legislator data from many multiple sources to create the most complete legislators database available. You'll be able to use this data to your advantage for your HackTJ projects.

Here are some sample apps that use the Phone2Action API:

* Sample App (Java)
* Sample App (Python)
* Messenger Bot (NodeJS)
* Web App (NodeJS)

**Feel free to build off of these or go your own way. Phone2Action does not require you to use our API or the starter templates/ideas to win our prize. We give you complete control over that! Just make sure it has an aspect that helps people become more civically engaged.**

### **API Endpoint**

```
https://fmrrixuk32.execute-api.us-east-1.amazonaws.com/hacktj/legislators
```

### **Method:**

```
GET
```

### **Authentication:**

To get your API key, text `HACKTJ19` to `52886`. Use that API key in the `X-API-Key` header of your requests. This is important; you won't be able to 

### **URL Params**

**Required:**
* `address=String`

**Optional:**
* `level=String`

Including a level parameter will filter the legislators result to that level only. Level can be any of the following:

- `NATIONAL_EXEC` : Refers to the President, VP, etc
- `NATIONAL_UPPER` : Refers to US Senators
- `NATIONAL_LOWER` : Refers to US Representatives (House)
- `STATE_EXEC` : Refers to state Governors
- `STATE_UPPER` : Refers to state Senators
- `STATE_LOWER` : Refers to state Representatives

### **Success Response:**

**HTTP Code:** 200 <br />
**Content:**

```
    {
        "number" : Int,
        "officials": Array
    }
```

### **Sample Call:**

```
https://fmrrixuk32.execute-api.us-east-1.amazonaws.com/hacktj/legislators?address=6560+Braddock+Rd&level=NATIONAL_UPPER
```

**Response**

```
{
    "number": 1,
    "officials": [
        {
            "id": 86746,
            "first_name": "Donald",
            "last_name": "Beyer",
            "nickname": "Don",
            "salutation": "Honorable",
            "office_details": {
                "position": "Representative",
                "state": "VA",
                "city": "",
                "chamber_details": {
                    "name": "United States House of Representatives",
                    "type": "LOWER",
                    "term_length": "",
                    "term_limit": "",
                    "election_frequency": "2 years"
                },
                "district": {
                    "type": "NATIONAL_LOWER",
                    "subtype": "LOWER",
                    "id": "8",
                    "city": "",
                    "state": "VA"
                }
            },
            "term_start": "2017-01-03 00:00:00",
            "term_end": "2021-01-03 00:00:00",
            "party": "Democrat",
            "bio": [
                "BEYER, Donald Sternoff Jr., a Representative from Virginia; born in Trieste, Italy, June 20, 1950; graduated from Gonzaga College High School, Washington, D.C., 1968; B.A., Williams College, Williamstown, Mass., 1972; automobile dealer; lieutenant governor of Virginia, 1990-1998; unsuccessful candidate for Governor of Virginia in 1997; United States Ambassador to Switzerland and Liechtenstein, 2009-2013; elected as a Democrat to the One Hundred Fourteenth and to the succeeding Congress (January 3, 2015-present).",
                "1950-06-20"
            ],
            "photo": "http://bioguide.congress.gov/bioguide/photo/B/B001292.jpg",
            "office_location": {
                "county": "",
                "postal_code": "20515",
                "phone_2": "",
                "phone_1": "(202) 225-4376",
                "fax_1": "(202) 225-0017",
                "city": "Washington",
                "fax_2": "",
                "state": "DC",
                "address_1": "United States House of Representatives",
                "address_2": "1119 Longworth House Office Building",
                "address_3": ""
            },
            "websites": [
                "https://beyer.house.gov/",
                "http://friendsofdonbeyer.com/"
            ],
            "emails": [],
            "socials": [
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "RSS",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189427,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189427,
                    "identifier_value": "https://beyer.house.gov/rss.xml"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "VOTESMART",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189428,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189428,
                    "identifier_value": "1707"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "BIOGUIDE",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189429,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189429,
                    "identifier_value": "B001292"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "CRP",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189430,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189430,
                    "identifier_value": "N00036018"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "FEC",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189432,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189432,
                    "identifier_value": "H4VA08224"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "GOVTRACK",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189434,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189434,
                    "identifier_value": "412657"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "YOUTUBE",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189435,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189435,
                    "identifier_value": "UCPJGVbOVcAVGiBwq8qr_T9w"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "INSTAGRAM",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189436,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189436,
                    "identifier_value": "repdonbeyer"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "TWITTER",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189437,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189437,
                    "identifier_value": "RepDonBeyer"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "FACEBOOK-CAMPAIGN",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189438,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189438,
                    "identifier_value": "https://www.facebook.com/FriendsofDonBeyer/"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "FACEBOOK-OFFICIAL",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189439,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189439,
                    "identifier_value": "https://www.facebook.com/RepDonBeyer"
                },
                {
                    "official": 228147,
                    "version": 1,
                    "identifier_type": "LINKEDIN",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 189440,
                    "valid_from": "2017-01-03 00:00:00",
                    "last_update_date": "2019-01-10 14:34:31.606904",
                    "id": 189440,
                    "identifier_value": "https://www.linkedin.com/in/don-beyer-6b444b4/"
                }
            ]
        }
    ]
}
```
