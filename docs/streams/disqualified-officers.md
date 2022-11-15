---
description: The disqualified officers stream provides events when an officer is disqualified. Events are rare on this stream.
---

# Disqualified officers stream

This stream was introduced around August 2022.

Events on this stream are very rare.

Sample event:
```json
{
  "resource_kind": "disqualified-officer-natural",
  "resource_uri": "/disqualified-officers/natural/rH3JIzSC8UrNmCOSi3ruAZGCahE",
  "resource_id": "rH3JIzSC8UrNmCOSi3ruAZGCahE",
  "data": {
    "date_of_birth": "1968-06-04",
    "disqualifications": [
      {
        "address": {
          "address_line_1": "Beaconsfield Road",
          "country": "United Kingdom",
          "locality": "London",
          "postal_code": "N11 3AA"
        },
        "case_identifier": "INV6358033",
        "company_names": [ "ASH ELECTRIC LIMITED" ],
        "disqualification_type": "undertaking",
        "disqualified_from": "2022-08-04",
        "disqualified_until": "2028-08-03",
        "reason": {
          "act": "company-directors-disqualification-act-1986",
          "description_identifier": "order-or-undertaking-and-reporting-provisions",
          "section": "7"
        },
        "undertaken_on": "2022-07-14"
      }
    ],
    "etag": "badf7c8786282215d0b5927c76458ec04544d90f",
    "forename": "Ashwin",
    "kind": "natural-disqualification",
    "links": {
      "self": "/disqualified-officers/natural/rH3JIzSC8UrNmCOSi3ruAZGCahE"
    },
    "nationality": "British",
    "other_forenames": "Harji",
    "surname": "PATEL",
    "title": "Mr"
  },
  "event": {
    "timepoint": 102,
    "published_at": "2022-08-04T00:02:01.812779+01:00",
    "type": "changed"
  }
}
```
