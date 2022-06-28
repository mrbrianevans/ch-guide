---
postName: Persons with Significant Control
tags:
  - persons with significant control
  - bulk data file
  - company ownership information
title: Persons with Significant Control (PSC) bulk data from Companies House
description: A guide to using the persons with signficant control bulk data JSON file from Companies House.
status: complete
---

# Bulk PSC data

PSC bulk download webpage: http://download.companieshouse.gov.uk/en_pscdata.html

The file is new line deliminated JSON.

## Sample
Each line has a JSON object like the one below.
```json
{"company_number":"09145694","data":{"address":{"address_line_1":"St. Andrews Road","country":"England","locality":"Henley-On-Thames","postal_code":"RG9 1HP","premises":"2"},"ceased_on":"2018-05-14","country_of_residence":"England","date_of_birth":{"month":2,"year":1977},"etag":"3b8caf795c03af63921e381f7bb8300a51ebb73d","kind":"individual-person-with-significant-control","links":{"self":"/company/09145694/persons-with-significant-control/individual/bIhuKnMFctSnjrDjUG8n3NgOrlU"},"name":"Mrs Nga Thanh Wildman","name_elements":{"forename":"Nga","middle_name":"Thanh","surname":"Wildman","title":"Mrs"},"nationality":"Vietnamese","natures_of_control":["ownership-of-shares-50-to-75-percent"],"notified_on":"2016-04-06"}}
```
And pretty printed (for ease of reading):
```json
{
  "company_number": "09145694",
  "data": {
    "address": {
      "address_line_1": "St. Andrews Road",
      "country": "England",
      "locality": "Henley-On-Thames",
      "postal_code": "RG9 1HP",
      "premises": "2"
    },
    "ceased_on": "2018-05-14",
    "country_of_residence": "England",
    "date_of_birth": {
      "month": 2,
      "year": 1977
    },
    "etag": "3b8caf795c03af63921e381f7bb8300a51ebb73d",
    "kind": "individual-person-with-significant-control",
    "links": {
      "self": "/company/09145694/persons-with-significant-control/individual/bIhuKnMFctSnjrDjUG8n3NgOrlU"
    },
    "name": "Mrs Nga Thanh Wildman",
    "name_elements": {
      "forename": "Nga",
      "middle_name": "Thanh",
      "surname": "Wildman",
      "title": "Mrs"
    },
    "nationality": "Vietnamese",
    "natures_of_control": [
      "ownership-of-shares-50-to-75-percent"
    ],
    "notified_on": "2016-04-06"
  }
}
```

## Update frequency
Updated daily before 10AM GMT every morning.

## URL
To programatically download the latest single file of PSC, use this URL template (swapping `YYYY-MM-DD` for the actual date):
```
http://download.companieshouse.gov.uk/persons-with-significant-control-snapshot-YYYY-MM-DD.zip
```

Example bash script to download and unzip the latest file:
```bash
today=$(date +"%Y-%m-%d")
url="http://download.companieshouse.gov.uk/persons-with-significant-control-snapshot-${today}.zip"
wget -nv -O psc.zip "$url"
unzip psc.zip
```

## Size guide
The data can be downloaded as multiple 60Mb chunks, or as a single file.

The single file download is a `.zip` file containing a single `.json` file.

The `.zip` file is approximately one gigabyte, and the `.json` file is about 6GB when unzipped.

Contained in the JSON file are about 10 million lines of persons details.

These sizes were accurate in 2021, but may change over time.

## Split files
There are segmented chunks as an alternative to the big file.
Each chunk contains 500,000 records and is about 65mb zipped and 370mb unzipped.
The file names are formatted slightly differently to the big file:
```
http://download.companieshouse.gov.uk/psc-snapshot-YYYY-MM-DD_{I}of{T}.zip
```

The last chunk is smaller than the others.
The last line of the last chunk contains a summary of the data, such as this (prettified):
```json
{
  "data": {
    "kind": "totals#persons-of-significant-control-snapshot",
    "persons_of_significant_control_count": 9792999,
    "statements_count": 627924,
    "exemptions_count": 60,
    "generated_at": "2022-06-28T03:40:50+01:00"
  }
}
```
