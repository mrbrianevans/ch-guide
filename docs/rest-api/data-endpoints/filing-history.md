# Filing history API endpoint
[Official documentation](https://developer-specs.company-information.service.gov.uk/companies-house-public-data-api/reference/filing-history)

The endpoint for getting filing history of a company is `/company/{companyNumber}/filing-history`. 

You can pass options for `items_per_page`, `start_index` and `category` in the search query of the URL.

Example URL to request: 
```
https://api.company-information.service.gov.uk/company/09226141/filings?items_per_page=100&start_index=0&category=accounts
```

## Categories
The official documentation lists these categories:

   - accounts
   - address
   - annual-return
   - capital
   - change-of-name
   - incorporation
  -  liquidation
   - miscellaneous
  -  mortgage
 -   officers
-    resolution

But I have found the endpoint returning other categories as well, such as `persons-with-significant-control` and `confirmation-statement`.

## Descriptions
Filing descriptions are given as an enum description code and a description values object.

The description enum code can be used to lookup a string format from this list of constants: https://github.com/companieshouse/api-enumerations/blob/master/filing_history_descriptions.yml.

For example, if description=`accounts-with-accounts-type-full` and description_values=`{made_up_to:'31/06/2021'}`, if you lookup the string format for the description code, its:
```
**Full accounts** made up to {made_up_date}
```
and then substitute the description values into the format placeholder to get:

```
**Full accounts** made up to 31/06/2021
```
Which is formatted with bold markdown:
> **Full accounts** made up to 31/06/2021
