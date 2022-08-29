# List of bulk data products
These are available via FTP from Companies House upon special request. 
There may be more than what is listed here, this is not an exhaustive list. 
Please add any more that you are aware of (edit button at bottom of page).

| Prod #  | Name                                                                                      |
|---------|-------------------------------------------------------------------------------------------|
| Prod100 | Daily Directory Updates                                                                   |
| Prod101 | Daily Directory                                                                           |
| Prod182 | related to prod100                                                                        |
| Prod183 | related to prod101                                                                        |
| Prod192 | Disqualified Directors                                                                    |
| Prod195 | [Company officer appointments snapshot](./officers/)                                      |
| Prod197 | Liquidation Daily Updates                                                                 |
| Prod198 | [Company officer appointment updates](./officers/update-file/)                            |
| Prod201 | Mort Daily updates                                                                        |
| Prod202 | Weekly Gazette                                                                            |
| Prod203 | COMPANY LAW OFFICIAL NOTIFICATIONS, SUPPLEMENT TO THE EDINBURGH GAZETTE (weekly, rep/dat) |
| Prod207 | (daily, maybe new companies)                                                              |
| Prod212 | (daily, xml)                                                                              |
| Prod213 | (daily, split by LLP/ALL, xml)                                                            |
| Prod214 | COMPANY LAW OFFICIAL NOTIFICATIONS, SUPPLEMENT TO THE BELFAST GAZETTE (weekly, rep/dat)   |
| Prod215 | (daily, rec ind and ext)                                                                  |
| Prod216 | ([officers bulk snapshot](./officers/), only produced upon request)                       |
| Prod217 | [Company basic data](./companies.md) (monthly, zipped)                                    |
| Prod223 | [Accounts Bulk Data Product](accounts/bulk-file.md)                                       |
| Prod224 | [Accounts monthly data](accounts/bulk-file.md) (upon request)                             |

For the most part, they follow the same structure of a plain text file where each line is a single record. 
The file begins with a header record, then has data records on each subsequent line, and then the last line is a trailer record.

Data records are typically fixed width data followed by chevron seperated variable width data.

For example company number, followed by company name would be:
```
00000000<COMPANY NAME<
```

The formats for each file are described in a Word document specification.
