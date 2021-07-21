# LEADS 
JSON file for sample data for leads form.

## .01 FIRST NAME  **   
**Type**: String    
**Required**: True  
**Description**: The user's first name.
```JSON 
[
  {
    "first_name": "John"
  }
]
```   
## .02 LAST NAME **  
**Type**: String
**Required**: True  
**Description**: The user's last name.
```JSON 
[
  {
    "last_name": "John"
  }
]
``` 
## .03 TITLE 
**Type**: String
**Required**: False  
**Description**: The user's work title.
```JSON 
[
  {
    "title": "Janitor"
  }
]
``` 
## .04 DEPARTMENT 
**Type**: String  
**Required**: False  
**Description**: The department the user is assigned to.
```JSON 
[
  {
    "department": "Custodian"
  }
]
``` 
## .05 ACCOUNT NAME  
**Type**: String  
**Required**: False  
**Description**: The account name for this lead.
```JSON 
[
  {
    "account_name": "Elaine Benes"
  }
]
``` 
## .06 SALES REP **   
**Type**: String  
**Required**: True  
**Description**: The sales rep for this lead.
```JSON 
[
  {
    "sales_rep": "George Costanza"
  }
]
```  
## .07 EMAIL **  
**Type**: String  
**Required**: True  
**Description**: The user's email address.
```JSON 
[
  {
    "email": "elaine.benes@domainname.com"
  }
]
```  
## .08 LEAD SOURCE    
**Type**: String[]  
**Required**: True  
**Description**: The user's email address.
```JSON 
[
  "lead_source": [
    "Cold Call",
    "Existing Customer",
    "Self Generated",
    "Employee",
    "Partner",
    "Public Relations",
    "Direct Mail",
    "Conference",
    "Trade Show",
    "Website",
    "Word Of Mouth",
    "Email",
    "Campaign",
    "Other"
  ]
]
```  
## .09 PHONE  
**Type**: String  
**Required**: False  
**Description**: The user's primary phone.
```JSON 
[
  "phone": [
    "phoneId": 0
    "type": [
      "mobile",
      "land line"
    ],
    "country_code":[469, 214, 976],
    "phone_number": 1234567,
    "phone_extension": 0000
  ]
]
```
## .10 STATUS  
**Type**: String  
**Required**: False  
**Description**: The user's status as a lead.
```JSON 
[
  "status": [
    "converted",
    "inactive",
    "new"
  ]
]
```
## .11 CORPORATE IDENTITY    
**Type**: String  
**Required**: False  
**Description**: The user's coporate identity.
```JSON 
[
  "coporate_identity": [
    "incorporatated"
  ]
]
```
## .12 DESCRIPTION      
**Type**: String  
**Required**: False  
**Description**: The description of the user lead.
```JSON 
[
  "description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```
## .13 NOTES      
**Type**: String  
**Required**: False  
**Description**: Notes for this lead.
```JSON 
[
  "notes": "Notes for ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```
## .14 REFERRED BY      
**Type**: String  
**Required**: False  
**Description**: Notes for this lead.
```JSON 
[
  "notes": "Notes for ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```
## .15 LEAD SOURCE       
**Type**: String  
**Required**: False  
**Description**: Notes for this lead.
```JSON 
[
  "notes": "Notes for ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```  


```
## .15 LEAD SOURCE       
**Type**: String  
**Required**: False  
**Description**: Notes for this lead.
```JSON 
[
  "notes": "Notes for ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
]
```
  lead source.
  country code.
  phone
  fax 
  website.
  billing address1
  billing address2
  billing city.
  billing state.
  billing postal.
  billing country.
  shipping address1
  shipping address2
  shipping city.
  shipping state.
  shipping postal.
  shipping country.

  "address" [
    {
      type: ["billing", "shipping"],
      "address1":  "100 N Central Expy",
      "address2":  "1125"
      "city" "Richardson",
      "state": [
        "abrreviatoon": "",
        "nick": "",
        full_name: 802,
        contry,
        post coporate_identity
      ]
    }
  ]





**2021.07.21**
```JSON  
[{
	"leadId": 0,
	"first_name": "John",
	"last_name": "Doe",
	"title": "Janitor",
	"department": "Custodian",
	"account_name": "Elaine Benes",
	"sales_rep": "George Costanza",
	"email": "elaine.benes@domainname.com",
	"lead_source": [
		"Cold Call",
		"Existing Customer",
		"Self Generated",
		"Employee",
		"Partner",
		"Public Relations",
		"Direct Mail",
		"Conference",
		"Trade Show",
		"Website",
		"Word Of Mouth",
		"Email",
		"Campaign",
		"Other"
	],
	"phone": [{
		"phoneId": 0,
		"type": [
			"mobile",
			"land line"
		],
		"country_code": [469, 214, 976],
		"phone_number": 1234567,
		"phone_extension": 0

	}],
	"status": [
		"converted",
		"inactive",
		"new"
	],
	"coporate_identity": [
		"incorporatated"
	],
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}]
```  




## LEADS: BASE  
```JSON  
[{
	"leadId": 0,
	"first_name": "Daenerys",
	"last_name": "Targaryen",
	"title": "Administrative Assistant",
	"department": "Administration",
	"account_name": "Lord Varys",
	"sales_rep": "Tormund Giantsbane",
	"email": "tormund.giantsbane@domainname.com",
	"lead_source": "Cold Call",
	"phone": "(000) 000-000",
	"status": "new",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}, {
	"leadId": 1,
	"first_name": "Tyrion",
	"last_name": "Lannister",
	"title": "Executive Assistant",
	"department": "Accounting and Finance",
	"account_name": "Davos Seaworth",
	"sales_rep": "Grand Maester Pycelle",
	"email": "grand.maester.pycelle@domainname.com",
	"lead_source": "Cold Call",
	"phone": "(000) 000-000",
	"status": "active",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}, {
	"leadId": 2,
	"first_name": "Jon",
	"last_name": "Snow",
	"title": "Marketing Manager",
	"department": "Marketing and Advertising",
	"account_name": "Brienne of Tarth",
	"sales_rep": "Melisandre",
	"email": "melisandre@domainname.com",
	"lead_source": "Cold Call",
	"phone": "(000) 000-000",
	"status": "converted",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}, {
	"leadId": 3,
	"first_name": "Cersei",
	"last_name": "Lannister",
	"title": "Customer Service Representative",
	"department": "Production and Inventory",
	"account_name": "Petyr 'Littlefinger' Baelish",
	"sales_rep": "Tywin Lannister",
	"email": "tywin.lannister@domainname.com",
	"lead_source": "Cold Call",
	"phone": "(000) 000-000",
	"status": "new",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}, {
	"leadId": 4,
	"first_name": "Sansa",
	"last_name": "Stark",
	"title": "Nurse Practitioner",
	"department": "Human Resources",
	"account_name": "Bran Stark",
	"sales_rep": "Gilly",
	"email": "gilly@domainname.com",
	"lead_source": "Cold Call",
	"phone": "(000) 000-000",
	"status": "new",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}, {
	"leadId": 5,
	"first_name": "Arya",
	"last_name": "Stark",
	"title": "Software Engineer",
	"department": "Information Technology",
	"account_name": "Sandor Clegane",
	"sales_rep": "Margaery Tyrell",
	"email": "margaery.tyrell@domainname.com",
	"lead_source": "Cold Call",
	"phone": "(000) 000-000",
	"status": "new",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}, {
	"leadId": 6,
	"first_name": "Jaime",
	"last_name": "Lannister",
	"title": "Sales Manager",
	"department": "Human Resources",
	"account_name": "Missandei",
	"sales_rep": "Joffrey Baratheon",
	"email": "joffrey.baratheon@domainname.com",
	"lead_source": "Trade Show",
	"phone": "(000) 000-000",
	"status": "active",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."

}, {
	"leadId": 7,
	"first_name": "Jorah",
	"last_name": "Mormont",
	"title": "Data Entry Clerk",
	"department": "Sales",
	"account_name": "Bronn",
	"sales_rep": "Catelyn Stark",
	"email": "catelyn.stark@domainname.com",
	"lead_source": "Email",
	"phone": "(000) 000-000",
	"status": "active",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."

}, {
	"leadId": 8,
	"first_name": "Samwell",
	"last_name": "Tarly",
	"title": "Data Entry Clerk",
	"department": "Marketing",
	"account_name": "Podrick Payne",
	"sales_rep": "Barristan Selmy",
	"email": "barristan.selmy@domainname.com",
	"lead_source": "Campaign",
	"phone": "(000) 000-000",
	"status": "active",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}, {
	"leadId": 9,
	"first_name": "Theon",
	"last_name": "Greyjoy",
	"title": "Sales Manager",
	"department": "Customer Service",
	"account_name": "Eddison Tollett",
	"sales_rep": "Stannis Baratheon",
	"email": "Stannis.baratheon@domainname.com",
	"lead_source": "Other",
	"phone": "(000) 000-000",
	"status": "active",
	"coporate_identity": "incorporatated",
	"description": "Lorem ipsum dolor amet, adipiscing elit. Praesent vitae posuere ligula."
}]
```