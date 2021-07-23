# LEADS 
JSON file for sample data for leads form.

## .01 FIRST NAME  **   
**Type**: String    
**Required**: True  
**Description**: The user"s first name.
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
**Description**: The user"s last name.
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
**Description**: The user"s work title.
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
**Description**: The user"s email address.
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
**Description**: The user"s email address.
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
**Description**: The user"s primary phone.
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
**Description**: The user"s status as a lead.
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
**Description**: The user"s coporate identity.
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
        full_"name": 802,
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
	"account_name": "Petyr "Littlefinger" Baelish",
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

# ORIGINAL JSON  
[Table with expandable rows](https://material.angular.io/components/table/examples#table-expandable-rows) 
```JSON 
[
  {
    "position": 1,
    "name": "Hydrogen",
    "weight": 1.0079,
    "symbol": "H",
    "description": "Description goes here"
  }, {
    "position": 2,
    "name": "Helium",
    "weight": 4.0026,
    "symbol": "He",
    "description": "Description goes here"
  }, {
    "position": 3,
    "name": "Lithium",
    "weight": 6.941,
    "symbol": "Li",
    "description": "Description goes here"
  }, {
    "position": 4,
    "name": "Beryllium",
    "weight": 9.0122,
    "symbol": "Be",
    "description": "Description goes here"
  }, {
    "position": 5,
    "name": "Boron",
    "weight": 10.811,
    "symbol": "B",
    "description": "Description goes here"
  }, {
    "position": 6,
    "name": "Carbon",
    "weight": 12.0107,
    "symbol": "C",
    "description": "Description goes here"
  }, {
    "position": 7,
    "name": "Nitrogen",
    "weight": 14.0067,
    "symbol": "N",
    "description": "Description goes here"
  }, {
    "position": 8,
    "name": "Oxygen",
    "weight": 15.9994,
    "symbol": "O",
    "description": "Description goes here"
  }, {
    "position": 9,
    "name": "Fluorine",
    "weight": 18.9984,
    "symbol": "F",
    "description": "Description goes here"
  }, {
    "position": 10,
    "name": "Neon",
    "weight": 20.1797,
    "symbol": "Ne",
    "description": "Description goes here"
  }
]
``` 

---  

# 2021.07.22 - 
Updated version.

### Columns  
Display these columns by default.
```ts  

// PROPERTIES.
public columnsToDisplay = [
	'accountName',
	'email',
	'firstName',
	'lastName',
	'leadId',
	'phone',
	'referredBy',
	'status',
	'title'
];

```  

### Interface  
```ts 
export interface Lead {
  accountName: string;
  email: string;
  firstName: string;
  lastName: string;
  leadId: number;
  phone: string;
  referredBy: string;
  status: string;
  title: string;
}
```
### JSON 
```ts

const ELEMENT_DATA: Lead[] = [
  {
    accountName: "string",
    email: "string",
    firstName: "string",
    lastName: "string",
    leadId: 0,
    phone: "string",
    referredBy: "string",
    status: "string",
    title: "string"
  }
];

```

[end: 2021.07.22](#)
--- 

### 2021.07.23 - JSON 
```json  
[{
	"leadId": 0,
	"firstName": "Daenerys",
	"lastName": "Targaryen",
	"title": "Administrative Assistant",
	"department": "Administration",
	"accountName": "Lord Varys",
	"salesRep": "Tormund Giantsbane",
	"email": "tormund.giantsbane@domainname.com",
	"leadSource": "Cold Call",
	"phone": "+1 (907) 200-6326",
	"status": "new",
	"coporateIdentity": "incorporatated",
	"description": "Also known as Daenerys Stormborn, and colloquially known as Dany, was the younger sister of Rhaegar Targaryen and Viserys Targaryen",
	"referredBy": "Gendry",
	"billingAddress1": "2285 Trout St",
	"billingAddress2": "",
	"billingCity": "Juneau",
	"billingState": "AK",
	"billingZip": "99801",
	"shippingAddress1": "2285 Trout St",
	"shippingAddress2": "",
	"shippingCity": "Juneau",
	"shippingState": "AK",
	"shippingZip": "99801",
	"activities": [{
		"activityDate": "Monday, July 26, 2024",
		"activityTime": "1PM CST",
		"activityTitle": "Product development call with Jody",
		"activityType": "Call",
		"activityOutcome": "Etiam sit amet porttitor ante. Ut sit amet lectus nunc. Vivamus a lacus ornare, efficitur lacus id, gravida enim."
	}, {
		"activityDate": "Thursday, July 29, 2024",
		"activityTime": "6AM CST",
		"activityTitle": "Sent Jody follow up email.",
		"activityType": "Email",
		"activityOutcome": "Ut sit amet arcu sagittis, consectetur odio vitae, porttitor sem. Suspendisse lacinia turpis et sapien."
	}, {
		"activityDate": "Friday, July 30, 2024",
		"activityTime": "11AM CST",
		"activityTitle": "Product development meeting with Jody @ Starbucks",
		"activityType": "Meeting",
		"activityOutcome": "Nam at nibh tincidunt, volutpat lorem vitae, molestie nisi. Sed ac lacus viverra, semper arcu in, volutpat risus."
	}, {
		"activityDate": "Tuesday, Aug 3, 2024",
		"activityTime": "4:25PM CST",
		"activityTitle": "Recap Meeting Notes: Jody @ Starbucks",
		"activityType": "Notes",
		"activityOutcome": "Aliquam gravida placerat quam vel rhoncus. Nulla interdum ullamcorper risus a imperdiet. Ut et consequat leo. Morbi ultrices felis nec ultricies lacinia."
	}]
}, {
	"leadId": 1,
	"firstName": "Tyrion",
	"lastName": "Lannister",
	"title": "Executive Assistant",
	"department": "Accounting and Finance",
	"accountName": "Davos Seaworth",
	"salesRep": "Grand Maester Pycelle",
	"email": "grand.maester.pycelle@domainname.com",
	"leadSource": "Cold Call",
	"phone": "+1 (479) 200-3694",
	"status": "active",
	"coporateIdentity": "incorporatated",
	"description": "Tyrion is mocked for being a dwarf, called derisive names such as 'Imp' and 'Halfman', which he tries to embrace to keep his self esteem up.",
	"referredBy": "Hodor",
	"billingAddress1": "3805 US-71",
	"billingAddress2": "",
	"billingCity": "Bentonville",
	"billingState": "AR",
	"billingZip": "72712",
	"shippingAddress1": "3805 US-71",
	"shippingAddress2": "",
	"shippingCity": "Bentonville",
	"shippingState": "AR",
	"shippingZip": "72712"
}, {
	"leadId": 2,
	"firstName": "Jon",
	"lastName": "Snow",
	"title": "Marketing Manager",
	"department": "Marketing and Advertising",
	"accountName": "Brienne of Tarth",
	"salesRep": "Melisandre",
	"email": "melisandre@domainname.com",
	"leadSource": "Cold Call",
	"phone": "+1 (303) 200-2433",
	"status": "converted",
	"coporateIdentity": "incorporatated",
	"description": "Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone.",
	"referredBy": "Qyburn",
	"billingAddress1": "1905 S Federal Blvd",
	"billingAddress2": "",
	"billingCity": "Denver",
	"billingState": "CO",
	"billingZip": "80219",
	"shippingAddress1": "1905 S Federal Blvd",
	"shippingAddress2": "",
	"shippingCity": "Denver",
	"shippingState": "CO",
	"shippingZip": "80219"
}, {
	"leadId": 3,
	"firstName": "Cersei",
	"lastName": "Lannister",
	"title": "Customer Service Representative",
	"department": "Production and Inventory",
	"accountName": "Petyr 'Littlefinger' Baelish",
	"salesRep": "Tywin Lannister",
	"email": "tywin.lannister@domainname.com",
	"leadSource": "Cold Call",
	"phone": "+1 (302) 200-4099",
	"status": "new",
	"coporateIdentity": "incorporatated",
	"description": "Queen Cersei I Lannister was the twentieth ruler of the Seven Kingdoms and the widow of King Robert Baratheon.",
	"referredBy": "Grenn",
	"billingAddress1": "16758 S Dupont Hwy",
	"billingAddress2": "",
	"billingCity": "Harrington",
	"billingState": "DE",
	"billingZip": "19952",
	"shippingAddress1": "16758 S Dupont Hwy",
	"shippingAddress2": "",
	"shippingCity": "Harrington",
	"shippingState": "DE",
	"shippingZip": "19952"
}, {
	"leadId": 4,
	"firstName": "Sansa",
	"lastName": "Stark",
	"title": "Nurse Practitioner",
	"department": "Human Resources",
	"accountName": "Bran Stark",
	"salesRep": "Gilly",
	"email": "gilly@domainname.com",
	"leadSource": "Cold Call",
	"phone": "+1 (208) 200-2371",
	"status": "new",
	"coporateIdentity": "incorporatated",
	"description": "Queen Sansa Stark is the eldest daughter of Lord Eddard Stark and his wife, Lady Catelyn, sister of Robb, Arya, Bran, and Rickon Stark, and 'half-sister' of Jon Snow; though truthfully is his cousin.",
	"referredBy": "Robb Stark",
	"billingAddress1": "2923 Cleveland Blvd",
	"billingAddress2": "",
	"billingCity": "Caldwell",
	"billingState": "ID",
	"billingZip": "83605",
	"shippingAddress1": "2923 Cleveland Blvd",
	"shippingAddress2": "",
	"shippingCity": "Caldwell",
	"shippingState": "ID",
	"shippingZip": "83605"
}, {
	"leadId": 5,
	"firstName": "Arya",
	"lastName": "Stark",
	"title": "Software Engineer",
	"department": "Information Technology",
	"accountName": "Sandor Clegane",
	"salesRep": "Margaery Tyrell",
	"email": "margaery.tyrell@domainname.com",
	"leadSource": "Cold Call",
	"phone": "+1 (316) 200-4363",
	"status": "new",
	"coporateIdentity": "incorporatated",
	"description": "Princess Arya Stark is the third child and second daughter of Lord Eddard Stark and his wife, Lady Catelyn Stark.",
	"referredBy": "Loras Tyrell",
	"billingAddress1": "3725 State Ave",
	"billingAddress2": "",
	"billingCity": "Kansas City",
	"billingState": "KS",
	"billingZip": "66102",
	"shippingAddress1": "3725 State Ave",
	"shippingAddress2": "",
	"shippingCity": "Kansas City",
	"shippingState": "KS",
	"shippingZip": "66102"
}, {
	"leadId": 6,
	"firstName": "Jaime",
	"lastName": "Lannister",
	"title": "Sales Manager",
	"department": "Human Resources",
	"accountName": "Missandei",
	"salesRep": "Joffrey Baratheon",
	"email": "joffrey.baratheon@domainname.com",
	"leadSource": "Trade Show",
	"phone": "+1 (339) 200-6416",
	"status": "active",
	"coporateIdentity": "incorporatated",
	"description": "Ser Jaime Lannister was the elder son of Lord Tywin Lannister, younger twin brother of Queen Cersei Lannister, and older brother of Tyrion Lannister.",
	"referredBy": "Shae",
	"billingAddress1": "340 Longwood Ave",
	"billingAddress2": "",
	"billingCity": "Boston",
	"billingState": "MA",
	"billingZip": "02115",
	"shippingAddress1": "340 Longwood Ave",
	"shippingAddress2": "",
	"shippingCity": "Boston",
	"shippingState": "MA",
	"shippingZip": "02115"

}, {
	"leadId": 7,
	"firstName": "Jorah",
	"lastName": "Mormont",
	"title": "Data Entry Clerk",
	"department": "Sales",
	"accountName": "Bronn",
	"salesRep": "Catelyn Stark",
	"email": "catelyn.stark@domainname.com",
	"leadSource": "Email",
	"phone": "+1 (406) 200-1428",
	"status": "active",
	"coporateIdentity": "incorporatated",
	"description": "Ser Jorah Mormont was an exiled Northern lord from Westeros, previously living in Essos.",
	"referredBy": "Ramsay Bolton",
	"billingAddress1": "907 W Main St",
	"billingAddress2": "",
	"billingCity": "Lewistown",
	"billingState": "MT",
	"billingZip": "59457",
	"shippingAddress1": "907 W Main St",
	"shippingAddress2": "",
	"shippingCity": "Lewistown",
	"shippingState": "MT",
	"shippingZip": "59457"

}, {
	"leadId": 8,
	"firstName": "Samwell",
	"lastName": "Tarly",
	"title": "Data Entry Clerk",
	"department": "Marketing",
	"accountName": "Podrick Payne",
	"salesRep": "Barristan Selmy",
	"email": "barristan.selmy@domainname.com",
	"leadSource": "Campaign",
	"phone": "+1 (505) 200-0279",
	"status": "active",
	"coporateIdentity": "incorporatated",
	"description": "Samwell, born Samwell Tarly, and often called Sam, is Jon Snow's closest friend, the eldest son of Lord Randyll Tarly and Lady Melessa Tarly of Horn Hill, and the older brother of Dickon and Talla Tarly.",
	"referredBy": "Roose Bolton",
	"billingAddress1": "2A NM-344",
	"billingAddress2": "",
	"billingCity": "Edgewood",
	"billingState": "NM",
	"billingZip": "87015",
	"shippingAddress1": "2A NM-344",
	"shippingAddress2": "",
	"shippingCity": "Edgewood",
	"shippingState": "NM",
	"shippingZip": "87015"
}, {
	"leadId": 9,
	"firstName": "Theon",
	"lastName": "Greyjoy",
	"title": "Sales Manager",
	"department": "Customer Service",
	"accountName": "Eddison Tollett",
	"salesRep": "Stannis Baratheon",
	"email": "Stannis.baratheon@domainname.com",
	"leadSource": "Other",
	"phone": "+1 (605) 200-1180",
	"status": "active",
	"coporateIdentity": "incorporatated",
	"description": "Theon Greyjoy was the youngest son of King Balon Greyjoy of the Iron Islands and the younger brother of Rodrik, Maron, and Yara Greyjoy.",
	"referredBy": "Alliser Thorne",
	"billingAddress1": "2223 W Main St",
	"billingAddress2": "",
	"billingCity": "Rapid City",
	"billingState": "SD",
	"billingZip": "57702",
	"shippingAddress1": "2223 W Main St",
	"shippingAddress2": "",
	"shippingCity": "Rapid City",
	"shippingState": "SD",
	"shippingZip": "57702"
}]
```
---