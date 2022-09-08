# Filing history API endpoint

The endpoint for getting filing history of a company is `/company/{companyNumber}/filing-history`. 

You can pass options for `items_per_page`, `start_index` and `category` in the search query of the URL.

Example URL to request: 
```
https://api.company-information.service.gov.uk/company/09226141/filings?items_per_page=100&start_index=0&category=accounts
```
