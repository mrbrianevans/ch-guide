---
postName: Filing stream
---

# Filing stream

Any filings, usually also triggers another event such as company, psc or officer.

### Introduction

One of the types of event streams offered by Companies House is filing events.

These are events whenever a company makes a new filing with Companies House. This includes accounts, change in officers,
change in PSC, change in registered office address and many others.

### Sample event

```json
{
  "resource_kind": "filing-history",
  "resource_uri": "/company/10676322/filing-history/MzI4OTQzODc5MGFkaXF6a2N4",
  "resource_id": "MzI4OTQzODc5MGFkaXF6a2N4",
  "data": {
    "barcode": "X9WQX0NE",
    "category": "accounts",
    "date": "2021-01-22",
    "description": "accounts-with-accounts-type-micro-entity",
    "description_values": {
      "made_up_date": "2020-03-31"
    },
    "links": {
      "self": "/company/10676322/filing-history/MzI4OTQzODc5MGFkaXF6a2N4"
    },
    "transaction_id": "MzI4OTQzODc5MGFkaXF6a2N4",
    "type": "AA"
  },
  "event": {
    "timepoint": 48990574,
    "published_at": "2021-01-22T18:28:02",
    "type": "changed"
  }
}
```

The key pieces of information contained in each event are:

- the company number
- the resource id
- the category
- the description (and values)
- the date of publication
- the filing date

### Unique ID

The resource id (identical to transaction id) is unique for each filing. Events are usually emitted multiple times by
Companies House, so it is necessary to have a unique constraint on resource id in the database to prevent duplicate
storage and retrieval of events.

### Descriptions

The way the descriptions work, is that there is a code for a description, such
as `notification-of-a-person-with-significant-control` and a map of values, such
as `{psc_name: 'Eduards Segals', date: '2019-10-23'}`. These are machine-readable pieces of data sent in the event, but
can be converted to a human-readable description by using enumerations defined
by [companies house in a YAML key-value map](/companieshouse/api-enumerations/blob/master/filing_history_descriptions.yml)
. Each description code is a key in this map (there are about a thousand keys), and the corresponding value is a string
with `{}` braces to format the values in. For example, a value could
be `**Notification** of {psc_name} as a person with significant control on {notification_date}`. Note the `**` to
indicate a title, and the `{psc_name}` to indicate a value should go there. This value can be found in the previously
mentioned map of values sent with the event. The title section is usually displayed in bold for emphasis. 
