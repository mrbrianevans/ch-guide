---
postName: Registered Office Address
---

Official
documentation: https://developer-specs.company-information.service.gov.uk/companies-house-public-data-api/reference/registered-office-address/registered-office-address

Endpoint: `https://api.company-information.service.gov.uk/company/{companyNumber}/registered-office-address`

Response format:

```json
{
  "address_line_1": "string",
  "address_line_2": "string",
  "country": "string",
  "etag": "string",
  "kind": "string",
  "links": {
    "self": "uri"
  },
  "locality": "string",
  "po_box": "string",
  "postal_code": "string",
  "premises": "string",
  "region": "string"
}
```
