---
description: The officers stream provides updates to the officers database, such as new appointments or resignations of directors and secretaries, and also any updates to their personal details.
---

# Officers stream

Update to directory/secretary appointment or details.

Sample event: 
```json
{
  "resource_kind": "company-officers",
  "resource_uri": "/company/11787956/appointments/iKuQLdnRcqfBN9vTpEIJqgVsT7A",
  "resource_id": "iKuQLdnRcqfBN9vTpEIJqgVsT7A",
  "data": {
    "address": {
      "address_line_1": "2 Woodberry Grove",
      "country": "United Kingdom",
      "locality": "Finchley",
      "postal_code": "N12 0DR",
      "premises": "Winnington House",
      "region": "London"
    },
    "appointed_on": "2019-01-25",
    "country_of_residence": "United Kingdom",
    "date_of_birth": {
      "month": 8,
      "year": 1959
    },
    "links": {
      "self": "/company/11787956/appointments/iKuQLdnRcqfBN9vTpEIJqgVsT7A"
    },
    "name": "DUKE, Michael",
    "nationality": "British",
    "occupation": "Administrator",
    "officer_role": "director",
    "resigned_on": "2019-01-25"
  },
  "event": {
    "timepoint": 7802811,
    "published_at": "2022-11-15T18:27:56",
    "type": "changed"
  }
}
```