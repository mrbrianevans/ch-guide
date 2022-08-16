---
description: Companies House provides a daily update file to the officer appointments dataset for keeping a database in step with Companies House records. These updates can be applied on top of an initial bulk file to keep it up-to-date. 
---

# Officers bulk updates file

A daily update file produced by Companies House which can be used to keep a database of officer appointments up-to-date.

## Obtaining the file
To obtain the daily update files, contact Companies House customer care, or post on the developer forum under 
[this thread](https://forum.aws.chdev.org/t/can-we-bulk-download-officer-director-data/1225/194), and someone will 
contact you to arrange it. The official product code/name to reference is Product 198.

You will need to provide Companies House with a public SSH key. They will provide you with a password to access the files 
on the Bulk Cloud Gateway.

## Format
The format of the file is similar to the bulk officers file, which contains a mixture of fixed width data and variable, 
chevron seperated data.

Each line contains a single record, which is one of the four possible [record types](#record-types).


## Record types
These are the types of record that can be found on each line of the officers daily update file. 
Header and Trailer records are the same as the bulk file, but the person and company records are different.

### Header
Header records are the same as described in the [bulk file record types header section](../recordTypes.md#header-record).

### Person update record
The precise layout and data dictionary of the fixed and variable width data can be found in [person update record data sheet](personUpdateRecord.md).

### Company record
Same as company records in the bulk file, a description can be found at [bulk file company record type](../recordTypes.md#company-record).


### Trailer
Trailer records are the same as described in the [bulk file record types trailer section](../recordTypes.md#trailer-record).


## Sample data
A sample of records found in an update file.
```
DDDDUPDT172420161018
019742101                       00070030WEST MIDLANDS ARTS TRUST(THE)<
0197421021     0101216582660001216582660001196002                  B1 1BB  20160629                201610180138COUNCILLOR<DESMOND<HUGHES<<<<COUNCIL HOUSE VICTORIA SQUARE<<BIRMINGHAM<<UNITED KINGDOM<SUPPORT WORKER<BRITISH<UNITED KINGDOM<<<<<<<<<<<<<<
01974210211    0103200204450001200204450001197804                  B1 1BB  2015062420160713        201610180143COUNCILLOR<PENNY<HOLBROOK<<<<COUNCIL VICTORIA SQUARE<<BIRMINGHAM<WEST MIDLANDS<ENGLAND<LOCAL AUTHORITY COUNCILLOR<BRITISH<ENGLAND<<<<<<<<<<<<<<
021978411                       00030032DUNSTAN BREARLEY TRAVEL LIMITED<
0219784121  Y  0101166895510001130695310001                        M60 4ES 20111231        20161018201610180112<<CWS (NO.1) LIMITED<<<<NEW CENTURY HOUSE CORPORATION STREET<<MANCHESTER<<UNITED KINGDOM<<BRITISH<<<<<<<<<<<<<<<
022015521                       00050025BONDLAW NOMINEES LIMITED<
0220155221  Y  0000059771390005059771390005                        SE1 2AU 19921018                201610180112<<BONDLAW SECRETARIES LIMITED<<<<4 MORE LONDON RIVERSIDE<<LONDON<<ENGLAND<FORMATION AGENT<BRITISH<<<<<<<<<<<<<<<
026471901                       00090021B G C (1991) LIMITED<
0264719021     0101003168570001003168570001194904                  HP9 2UR 20161015                201610180118MR<PATRICK JOSEPH<BYRNE<<<<BEACONSFIELD GOLF CLUB<SEER GREEN<BEACONSFIELD<BUCKS<<RETIRED<BRITISH<ENGLAND<<<<<<<<<<<<<<
0264719021     0101202599790001202599790001196003                  HP9 2UR 20161015                201610180117MR<TIM CLIVE<WHITTAKER<<<<BEACONSFIELD GOLF CLUB<SEER GREEN<BEACONSFIELD<BUCKS<<RETIRED<BRITISH<ENGLAND<<<<<<<<<<<<<<
0264719021     0101216575880001216575880001195810                  HP9 2UR 20161015                201610180117MRS<AMANDA<BARTHOLOMEW<<<<BEACONSFIELD GOLF CLUB<SEER GREEN<BEACONSFIELD<BUCKS<<RETIRED<BRITISH<ENGLAND<<<<<<<<<<<<<<
02647190211    0103000844970001000844970001195110                  HP9 2UR 2010101720161015        201610180129MR<JOHN EDWARD<BAILEY<<<<BEACONSFIELD GOLF CLUB<SEER GREEN<BEACONSFIELD<BUCKS<<CHARTERED ACCOUNTANT<BRITISH<ENGLAND<<<<<<<<<<<<<<
02647190211    0103069920630001069920630001194605                  HP9 1XY 2002113020161015        201610180143<DAVID<LEWIS<<<<PENNYFIELD 9 PITCH POND CLOSE<KNOTTY GREEN<BEACONSFIELD<BUCKINGHAMSHIRE<<MANAGING DIRECTOR<BRITISH<UNITED KINGDOM<<<<<<<<<<<<<<
9999999900000012
```

