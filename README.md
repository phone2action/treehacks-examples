# treehacks-examples

## **Legislators API**

Welcome to the Phone2Action Legislators API. We have opened up one of our core APIs for you to use. Phone2Action aggregates legislator data from many multiple sources to create the most complete legislator's database available. You'll be able to use this data to your advantage for your TreeHacks projects.

Read more about our challenge, mission, past hackathon winners here: [Phone2Action TreeHacks](http://treehacks.phone2action.com)

### **URL**

```
https://q4ktfaysw3.execute-api.us-east-1.amazonaws.com/treehacks/legislators
```

### **Method:**

```
GET
```

### **Authentication:**

To get your API token, you must text "TREEHACKS" to 52886. We will ask for your name and email address for identification purposes, then you'll get a response with an API token. Use that API token in the `X-API-Key` header of your requests.

### **URL Params**

**Required:**
`address=[string]`

**Optional:**
`level=[string]`

Including a level parameter will filter the legislators result to that level only. Level can be any of the following:

- `NATIONAL_EXEC` : Refers to the President, VP, etc
- `NATIONAL_UPPER` : Refers to U.S. Senate members
- `NATIONAL_LOWER` : Refers to U.S. Congress members
- `STATE_EXEC` : Refers to state governors
- `STATE_UPPER` : Refers to state senators
- `STATE_LOWER` : Refers to state congress members

### **Success Response:**

**Code:** 200 <br />
**Content:**

```
    {
        number : [int],
        officials: [array]
    }
```

### **Sample Call:**

```
https://llqi9q94si.execute-api.us-east-1.amazonaws.com/dev/legislators?address=450+Serra+Mall,+Stanford,+CA+94305&level=NATIONAL_LOWER

```

**Response**

```
{
    "number": 1,
    "officials": [
        {
            "id": 17506,
            "first_name": "Anna",
            "last_name": "Eshoo",
            "nickname": "",
            "salutation": "Honorable",
            "office_details": {
                "position": "Representative",
                "state": "CA",
                "city": "",
                "chamber_details": {
                    "name": "United States House of Representatives",
                    "type": "LOWER",
                    "term_length": "",
                    "term_limit": "",
                    "election_frequency": "2 years"
                },
                "district": {
                    "type": "",
                    "subtype": "LOWER",
                    "city": "",
                    "state": "CA"
                }
            },
            "term_start": "2013-01-03 00:00:00",
            "term_end": "2021-01-03 00:00:00",
            "party": "Democrat",
            "bio": [
                "ESHOO, Anna Georges, a Representative from California; born in New Britain, Hartford County, Conn., December 13, 1942; A.A., Canada College, Redwood City, Calif., 1975; Democratic National Committeewoman from California, 1980-1992; staff, speaker pro tempore of the California state assembly, 1981-1982; member of the San Mateo County, Calif., board of supervisors, 1983-1992; president, San Mateo County, Calif. board of supervisors, 1986; member, California Democratic State Central Executive Committee; member of the Democratic National Commission on Presidential Nominations, 1982; unsuccessful candidate for election to the United States House of Representatives in 1988; elected as a Democrat to the One Hundred Third and to the eleven succeeding Congresses (January 3, 1993-present).",
                "1942-12-13"
            ],
            "photo": "https://eshoo.house.gov/wp-content/uploads/2014/07/Congresswoman_Anna_Eshoo-199x300.jpg",
            "office_location": {
                "county": "",
                "postal_code": "20515",
                "phone_2": "",
                "phone_1": "(202) 225-8104",
                "fax_1": "(202) 225-8890",
                "city": "Washington",
                "fax_2": "",
                "state": "DC",
                "address_1": "United States House of Representatives",
                "address_2": "202 Cannon House Office Building",
                "address_3": ""
            },
            "websites": [
                "https://eshoo.house.gov/"
            ],
            "emails": [],
            "socials": [
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "BIOGUIDE",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184504,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184504,
                    "identifier_value": "E000215"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "CRP",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184505,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184505,
                    "identifier_value": "N00007335"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "VOTESMART",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184506,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184506,
                    "identifier_value": "26741"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "GOVTRACK",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184507,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184507,
                    "identifier_value": "400124"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "FEC",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184508,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184508,
                    "identifier_value": "H8CA12098"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "TWITTER",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184510,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184510,
                    "identifier_value": "RepAnnaEshoo"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "YOUTUBE",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184511,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184511,
                    "identifier_value": "RepAnnaEshoo"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "INSTAGRAM",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184513,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184513,
                    "identifier_value": "RepAnnaEshoo"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "FACEBOOK-OFFICIAL",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184514,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184514,
                    "identifier_value": "https://www.facebook.com/RepAnnaEshoo"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "LINKEDIN",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184515,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184515,
                    "identifier_value": "https://www.linkedin.com/in/anna-eshoo-b0392095/"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "FACEBOOK-CAMPAIGN",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184516,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184516,
                    "identifier_value": "https://www.facebook.com/Eshoo4Congress/"
                },
                {
                    "official": 227083,
                    "version": 1,
                    "identifier_type": "TWITTER",
                    "valid_to": "2021-01-03 00:00:00",
                    "sk": 184517,
                    "valid_from": "2013-01-03 00:00:00",
                    "last_update_date": "2019-01-07 19:41:24.572271",
                    "id": 184517,
                    "identifier_value": "Eshoo4Congress"
                }
            ]
        }
    ]
}
```
