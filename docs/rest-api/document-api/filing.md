# Filings Document API
## Introduction

Companies House provides an API to retrieve documents such as accounts or other types of filings. They are referenced by
the filings transaction/resource id and the company number.

## How to use

Basic authentication is required for all of these endpoints.

To see the filings available for a certain company,
request `https://api.companieshouse.gov.uk/company/{{company_number}}/filing-history`

This responds with an object in this shape:

```json
{
  "total_count": 8,
  "filing_history_status": "filing-history-available",
  "start_index": 0,
  "items": [
  ],
  "items_per_page": 25
}
```

The items list contains filing objects, which have some details about the filing, and also a link to the filings
metadata.

Request the metadata at a URL like
this: `https://frontend-doc-api.company-information.service.gov.uk/document/HMsKGYRQ0a12waWa3LG2zhcwXkujPWQ671cSMFZNVsU`
with the link obtained from the previous API call.

The metadata endpoint returns some more details about the document such as when it was filed, what was filed and the
formats its available to download in. Here is an example response:

```json
{
  "company_number": "10676322",
  "barcode": "X62BSQLV",
  "significant_date": null,
  "significant_date_type": "",
  "category": "new-companies",
  "pages": 27,
  "filename": "",
  "created_at": "2017-03-17T11:00:24.80683293Z",
  "etag": "",
  "links": {
    "self": "https://document-api.companieshouse.gov.uk/document/HMsKGYRQ0a12waWa3LG2zhcwXkujPWQ671cSMFZNVsU",
    "document": "https://document-api.companieshouse.gov.uk/document/HMsKGYRQ0a12waWa3LG2zhcwXkujPWQ671cSMFZNVsU/content"
  },
  "resources": {
    "application/pdf": {
      "content_length": 865942
    }
  }
}
```

The links section contains a link to the document, and the resources section contains the format that the document is
available in. This is generally `application/pdf`, but for accounts can also be `application/xhtml+xml` (for iXBRL).

To access the document, request the link given in metadata and put a header to specify the desired content type (
eg `Accept: application/pdf`).

A simple example in JavaScript:

```javascript
import { request } from 'https'

const options = {
  host: 'document-api.companieshouse.gov.uk', 
  path: '/document/DR2uueIff1_ydir2xBw6ilyEjTTbN-s2b64v1wpqGl0/content', 
  auth: process.env.APIUSER + ':', 
  headers: {accept: 'application/xhtml+xml'}
}
request(options, (response) => {
  console.log('Status code', response.statusCode, response.statusMessage)
  response.pipe(process.stdout) // print out response
})
```

PDFs can possibly be read using [PDF.js](https://github.com/mozilla/pdf.js)
