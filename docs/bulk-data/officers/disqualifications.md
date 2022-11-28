---
description: The officer disqualifications bulk file is produced by Companies House with a list of all currently disqualified officers.
---

# Officer disqualifications

The officer disqualifications data set provides a snapshot of currently disqualified officers.

It is produced once a week and is available every Saturday.

It is made available over FTP on the Companies House FTP server for bulk products.

The product code is `prod192`, and the files are located in `free/prod192` on the FTP server, followed by the date path. For example:
```
/free/prod192/2022/11/26/Prod192_3321.txt
```

The data format is Companies House custom format, similar to the officers bulk file. 
New line seperated records, comprised of fixed width columns and followed by variable width, chevron seperated data.
(see the sample below)

## Data
The information contained in the file:
 - person details for disqualified officer (date of birth, name, address, nationality etc.)
 - disqualification details (start and end dates, company disqualified from, reason for disqualification etc.)
 - exemption details (when a disqualified officer is given permission to act, duration and company names are provided)
 - variations

## Differences between bulk and API
There is slightly different data available from the REST API than what is found in the bulk file.

|                       | API       | Bulk file                  |
|:----------------------|-----------|----------------------------|
| Name honours          | Includes  | Does not include           |
| Reason description    | Includes  | Does not include           |
| Premises              | Specified | Merged with address line 1 |
| Exemptions court name | Includes  | Does not include           |


## Sample

```
DISQUALS332120221126
100117493000119480629EH53 0RA0087MR<GIOVANNI<FARGNOLI<<90 LANGTON VIEW<EAST CALDER<LIVINGSTON<<UNITED KINGDOM<ITALIAN<<<
20011749300012019122320230622CDDA 1986 S7        UNDERTAKING                   20191202INV5486247                    G&D LA CAPANNA LTD                                                                                                                                              0018INSOLVENCY SERVICE
100124403000219610314G66 8AN 0084MR<GEORGE<BEATTIE<<WOODBURN HOUSE AUCHENREOCH<MILTON OF CAMPSIE<GLASGOW<<<BRITISH<<<
20012440300022017050420240503CDDA 1986 S7        UNDERTAKING                   20170413INV4619895                    GEORGE HUNTER (DEMOLISHERS) LIMITED                           128147299000119620504M43 6HF 0080MR<WAYNE<PITT (AKA PITTS)<<333 MANCHESTER ROAD<DROYLSDEN<MANCHESTER<<<BRITISH<<<
22814729900012021033120240330CDDA 1986 S7        UNDERTAKING                   20210310INV5434457                    SPEEDY PILING AND BUILDING SERVICES LTD                                                                                                                         0018INSOLVENCY SERVICE
3281472990001202103302024033100000000030015DONKEYSTONE LTD
3281472990001202103302024033100000000030017PITT PROPERTY LTD
3281472990001202103302024033100000000030021M60 TOOL HIRE LIMITED
3281472990001202103302024033100000000030023CHLOE PITT PROPERTY LLP                                                                                                                               
DISQUALS/00000002/00000003/00000004/00000000/00000009
```
