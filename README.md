FORMAT: 1A
HOST: 127.0.0.1:4040

# Campus API

A API of Campus User for creating, updating, retrieving or deleting users.

## Users [/campus/user]

### List All Users [GET]

This action will show this list of the users of the database.

+ Response 200 (application/json)

        [
            {
                "status": "success",
                "result": 2,
                "data": {
                    "users": [
                        {
                            "_id": "5e0ca2412c71ee3258ec5e48",
                            "Name": "Umme Farhana Bristy",
                            "Department": "CSE",
                            "Roll": 1812176136,
                            "__v": 0
                        },
                        {
                            "_id": "5e0ca2782c71ee3258ec5e49",
                            "Name": "Farhin Mashiat Mayabee",
                            "Department": "CSE",
                            "Roll": 1812176135,
                            "__v": 0
                        }
                    ]
                }
            }
        ]

### Entering data of new User [POST]

You may create your own product using this action. It takes a JSON
object containing the followings:
    1. Name
    2. Department
    3. Roll

+ Request (application/json)
    
        {
            "Name": "Farhin Mashiat Mayabee",
            "Department": "CSE",
            "Roll": "1812176135"
        }

+ Response 201 (application/json)

    + Headers

            Location: campus/user

    + Body

            {
                "status": "success",
                "data": {
                    "newUser": {
                        {
                            "_id": "5e0ca2782c71ee3258ec5e49",
                            "Name": "Farhin Mashiat Mayabee",
                            "Department": "CSE",
                            "Roll": 1812176135,
                            "__v": 0
                        }
                    }
                }
            }
            
### Update an Existing User [PUT]

The upadate of an existing user information can be done through this action. 

Using the id: 5e0ca2782c71ee3258ec5e49

+ Request (application/json)

        {
            "Name": "Farhin Mashiat Mayabee",
            "Department": "CSE",
            "Roll": "1812176135"
        }

+ Response 200 (application/json)

    + Headers

            Location: campus/user/5e0ca2782c71ee3258ec5e49

    + Body

            {
                "status": "success",
                "data": {
                    "newUser": {
                            "_id": "5e0ca2782c71ee3258ec5e49",
                            "Name": "Farhin Mashiat Mayabee",
                            "Department": "CSE",
                            "Roll": 1812176135,
                            "__v": 0
                    }
                }
            }
            
### Delete an Existing User [DELETE]

Any existing user can be deleted through this action using the id of 
the user. 

Using the id: 5e0ca2782c71ee3258ec5e49

+ Request (application/json)

        {
            "Name": "Farhin Mashiat Mayabee",
            "Department": "CSE",
            "Roll": "1812176135"
        }


+ Response 200 (application/json)

    + Headers

            Location: campus/user/5e0ca2782c71ee3258ec5e49

    + Body

            {
                "message": "204 No content"
            }
