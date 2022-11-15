---
description: The persons with significant control stream provides events when a PSC is notified for a company, or ceases from a company and also when there is a change to the PSC details.
---

## PSC stream

Updates to person with significant control, long running HTTP request.

Sample event:
```json
{
  "resource_kind": "company-psc-individual",
  "resource_uri": "/company/14101021/persons-with-significant-control/individual/VLR98wu5c2fzRanelWt-zGD6oFw",
  "resource_id": "VLR98wu5c2fzRanelWt-zGD6oFw",
  "data": {
    "address": {
      "address_line_1": "De Beauvoir",
      "address_line_2": "St Aubins Court",
      "country": "England",
      "locality": "London",
      "postal_code": "N1 5TN",
      "premises": "Flat 18"
    },
    "country_of_residence": "England",
    "date_of_birth": {
      "month": 12,
      "year": 1995
    },
    "etag": "2227d94045cb6244d49feb170a7a6ed0d8e8bb30",
    "kind": "individual-person-with-significant-control",
    "links": {
      "self": "/company/14101021/persons-with-significant-control/individual/VLR98wu5c2fzRanelWt-zGD6oFw"
    },
    "name": "Mr Max Hodgkinson",
    "name_elements": {
      "forename": "Max",
      "surname": "Hodgkinson",
      "title": "Mr"
    },
    "nationality": "British",
    "natures_of_control": [
      "ownership-of-shares-75-to-100-percent",
      "voting-rights-75-to-100-percent",
      "right-to-appoint-and-remove-directors"
    ],
    "notified_on": "2022-05-11"
  },
  "event": {
    "timepoint": 4989097,
    "published_at": "2022-11-15T18:58:33",
    "type": "changed"
  }
}
```