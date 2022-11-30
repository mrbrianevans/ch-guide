---
description: Companies House produces a bulk product containing a list of companies (by company number) with their SIC codes and current status. This document explains the contents of the file.
---

# SIC codes bulk file (prod 200)

Prod200 contains a list of companies (by company number) with their SIC codes and current status.

## Size
There are about 14 million records in the file because it contains dissolved companies as well as active.

The file size is around 450MB.

## Sample
```
AAAAAAAA3317221129
01871151                    D
02282388 4531               D
0425277843999
0539143196090
9999999900000004
```

## Record structure
There are 3 types of record: header, data and trailer.
The header record begins with `AAAAAAAA`, followed by the run number and date of production.

The trailer record begins with `99999999`, followed by the count of records in the file.

The first 8 characters of each data record is the company number. 
Followed by 4 sets of 5 characters, being the 4 possible SIC codes for the company (or blank spaces if not available). 
Followed by a single character which indicates the company status. `C` for closed/converted. `D` for dissolved. `L` for liquidation. `R` for receivership. Otherwise blank ` `.
