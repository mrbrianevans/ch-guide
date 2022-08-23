---
description: Every company registered in the UK has a unique company number, which can be used to identify the company. This page describes the format of company numbers and explains how to normalise them. Depending on which region of the UK a company was registered in, it will have a different prefix to its company number.
---
# Company numbers

Every company registered in the UK has a unique company number, which can be used to identify the company. 
This will remain the same regardless of changes to the details of the company such as company name.

## Format

Company numbers are 8 character alphanumeric strings. The majority (~92%) of company numbers are purely numeric.


I've tested the below regex on a database of 13.6 million real company numbers, and they all match. It was sourced from a combination of looking at various documentation and also trial-and-error testing on the database of company numbers.
```js
/^((AC|ZC|FC|GE|LP|OC|SE|SA|SZ|SF|GS|SL|SO|SC|ES|NA|NZ|NF|GN|NL|NC|R0|NI|EN|\d{2}|SG|FE)\d{5}(\d|C|R))|((RS|SO)\d{3}(\d{3}|\d{2}[WSRCZF]|\d(FI|RS|SA|IP|US|EN|AS)|CUS))|((NI|SL)\d{5}[\dA])|(OC(([\dP]{5}[CWERTB])|([\dP]{4}(OC|CU))))$/
```

This is made up of "normal" companies, which end in 6 numeric digits:
```js
/(AC|ZC|FC|GE|LP|OC|SE|SA|SZ|SF|GS|SL|SO|SC|ES|NA|NZ|NF|GN|NL|NC|R0|NI|EN|\d{2}|SG|FE)\d{5}(\d|C|R)/
```
Registered societies which are prefixed with RS and end in 0,1,2 or 3 alphabet letters:
```js
/(RS|SO)\d{3}(\d{3}|\d{2}[WSRCZF]|\d(FI|RS|SA|IP|US|EN|AS)|CUS)/
```
And scottish limited partnerships and northern ireland companies which are prefixed with SL or NI and can optionally end in an A:
```js
/(NI|SL)\d{5}[\dA]/
```

And england or wales LLPs which are prefixed with OC and can end in various alphabet letters:
```js
/OC(([\dP]{5}[CWERTB])|([\dP]{4}(OC|CU)))/
```

## Normalise

Sometimes leading zeros are omitted, so `00644831` is sometimes referred to as `644831`. 
To normalise this shorthand, pad the start of a company number with zeros until its 8 characters long.

As some company numbers contain alphabet letters, these should be upper case.

## Prefix meanings

The prefix indicates the company type and jurisdiction.

| Prefix   | Company Type                                                        | Additional                                | Example  |
|----------|---------------------------------------------------------------------|:------------------------------------------|----------|
| 0-9      | England & Wales Company                                             |                                           |          |
| AC       | Assurance Company for England & Wales                               |                                           | AC000001 |
| ZC       | Unregistered Companies (S 1043 - Not Cos Act) for England & Wales   |                                           | ZC000011 |
| FC       | Overseas Company                                                    |                                           | FC000011 |
| GE       | European Economic Interest Grouping (EEIG) for England & Wales      |                                           | GE000001 |
| LP       | Limited Partnership for England & Wales                             |                                           | LP001682 |
| OC       | Limited Liability Partnership for England & Wales                   | Can contain `P` and end in 1 or 2 letters | OC300001 |
| SE       | European Company (Societas Europaea) for England & Wales            |                                           | SE000008 |
| SA       | Assurance Company for Scotland                                      |                                           | SA000038 |
| SZ       | Unregistered Companies (S 1043 Not Cos Act) for Scotland            |                                           | SZ000001 |
| SF       | Overseas Company regd in Scotland (pre 1/10/09)                     |                                           | SF000109 |
| GS       | European Economic Interest Grouping (EEIG) for Scotland             |                                           | GS000001 |
| SL       | Limited Partnership for Scotland                                    | suffix can be A                           | SL000001 |
| SO       | Limited Liability Partnership for Scotland                          |                                           | SO300001 |
| SC       | Scottish Company                                                    |                                           | SC000053 |
| ES       | European Company (Societas Europaea) for Scotland                   |                                           |          |
| NA       | Assurance Company for Northern Ireland                              |                                           |          |
| NZ       | Unregistered Companies (S 1043 Not Cos Act) for Northern Ireland    |                                           |          |
| NF       | Overseas Company regd in Northern Ireland (pre 1/10/09)             |                                           | NF000006 |
| GN       | European Economic Interest Grouping (EEIG) for Northern Ireland     |                                           |          |
| NL       | Limited Partnership for Northern Ireland                            |                                           | NL000010 |
| NC       | Limited Liability Partnership for Northern Ireland                  |                                           | NC000001 |
| R0       | Northern Ireland Company (pre partition)                            |                                           | R0000001 |
| NI       | Northern Ireland Company (post partition)                           | suffix can be A                           | NI000016 |
| EN       | European Company (Societas Europaea) for Northern Ireland           |                                           |          |
| -------- | ------------------------------------------------------------------- | -----------                               |          |
| RS       | Registered Society                                                  | suffix is 1 or 2 or 3 letters             |          |
| SG       | Scottish Partnership                                                |                                           |          |
| SI       | Investment Company with Variable Capital(Umbrella)                  |                                           |          |
| FE       | Further Education and Sixth Form College Corps                      |                                           |          |

Company numbers which Companies House does not hold details for:

| Prefix   | Company Type                                                       |
|----------|--------------------------------------------------------------------|
| IP       | Industrial & Provident Company                                     |
| SP       | Scottish Industrial/Provident Company                              |
| IC       | ICVC (Investment Company with Variable Capital)                    |
| SI       | Scottish ICVC (Investment Company with Variable Capital)           |
| NP       | Northern Ireland Industrial/Provident Company or Credit Union      |
| NV       | Northern Ireland ICVC (Investment Company with Variable Capital)   |
| RC       | Royal Charter Companies (English/Wales)                            |
| SR       | Scottish Royal Charter Companies                                   |
| NR       | Northern Ireland Royal Charter Companies                           |
| NO       | Northern Ireland Credit Union Industrial/Provident Society         |
| -------- | ------------------------------------------------------------------ |
| CE       | Charitable Incorporated Organisation                               |
| CS       | Scottish Charitable Incorporated Organisation                      |
| PC       | Protected Cell Company                                             |
