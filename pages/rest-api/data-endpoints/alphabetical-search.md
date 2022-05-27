---
postName: Alphabetical Search
tags:
  - search
  - alphabetic
  - companies
title: Alphabetical Company Search REST API
description: A guide to using the alphabetical search API from Companies House to find companies by name.
status: complete
---

# Alphabetical Search API

The alphabetical search API allows you to search for companies by name, and page through them in alphabetic order.

# Endpoint URL
The [official documentation](https://developer-specs.company-information.service.gov.uk/companies-house-public-data-api/reference/search/search-companies-alphabetically) incorrectly lists the URL as `/alphabetic-search/companies` but actually it is `/alphabetical-search/companies`.
Attempting to use the path in the official documentation results in 404 status codes.


# Query parameters
The search parameters are included in the request query string like this:
```
/alphabetical-search/companies?q=james&search_above=JAMERRA:10686253&search_below=JAMESAANDERSON:SC377476&size=50
```

The `search_above` and `search_below` parameters can be used to paginate through results in alphabetic order.
The `ordered_alpha_key_with_id`'s can be obtained in the results of search operations.

# Response
The response contains items for each company matching your search, in the following structure:
```json
{
  "company_name": "JAMES & DART LIMITED",
  "company_number": "05495616",
  "company_status": "dissolved",
  "company_type": "ltd",
  "ordered_alpha_key_with_id": "JAMES:05495616",
  "kind": "searchresults#alphabetical-search",
  "links": {
    "company_profile": "/company/05495616"
  }
}
```
