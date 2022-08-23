---
description: Companies House REST API endpoint for retrieving company profile information by company number, such as company name, date of creation, company type and status.
---
# Get company profile endpoint
This is an unofficial supplement to the [official documentation](https://developer-specs.company-information.service.gov.uk/companies-house-public-data-api/reference/company-profile/company-profile).

This endpoint returns company profile details for a given company number. 

## Url
The endpoint URL format is: `https://api.company-information.service.gov.uk/company/{companyNumber}` where `{companyNumber}` is an 8 character [company number](/general/company-number.md). For example:

```
GET /company/02578066 HTTP/1.1
Host: https://api.company-information.service.gov.uk
Accept: application/json
```

Returns:

```json
{
  "type": "ltd",
  "registered_office_address": {
    "address_line_2": "1st Floor Flat",
    "locality": "London",
    "country": "England",
    "address_line_1": "14 Lawn Road",
    "postal_code": "NW3 2XS"
  },
  "status": "active",
  "last_full_members_list_date": "2016-01-30",
  "has_been_liquidated": false,
  "sic_codes": [
    "98000"
  ],
  "accounts": {
    "accounting_reference_date": {
      "day": "31",
      "month": "01"
    },
    "overdue": false,
    "next_due": "2023-10-31",
    "next_made_up_to": "2023-01-31",
    "next_accounts": {
      "overdue": false,
      "period_end_on": "2023-01-31",
      "due_on": "2023-10-31",
      "period_start_on": "2022-02-01"
    },
    "last_accounts": {
      "period_end_on": "2022-01-31",
      "period_start_on": "2021-02-01",
      "made_up_to": "2022-01-31",
      "type": "total-exemption-full"
    }
  },
  "company_name": "14 LAWN ROAD LIMITED",
  "date_of_creation": "1991-01-30",
  "undeliverable_registered_office_address": false,
  "company_number": "02578066",
  "jurisdiction": "england-wales",
  "etag": "ecbcc0a0c3c254ad6f7a1b6b28285dd7a2a6e2b7",
  "company_status": "active",
  "has_insolvency_history": false,
  "has_charges": false,
  "confirmation_statement": {
    "next_due": "2023-02-13",
    "overdue": false,
    "last_made_up_to": "2022-01-30",
    "next_made_up_to": "2023-01-30"
  },
  "links": {
    "self": "/company/02578066",
    "filing_history": "/company/02578066/filing-history",
    "officers": "/company/02578066/officers",
    "persons_with_significant_control_statements": "/company/02578066/persons-with-significant-control-statements"
  },
  "registered_office_is_in_dispute": false,
  "has_super_secure_pscs": false,
  "can_file": true
}
```
Responses contain enum constants for some fields (`company_status`,`jurisdiction`,`status`,`sic_codes`,`type`) which can be found here: https://github.com/companieshouse/api-enumerations/blob/master/constants.yml
