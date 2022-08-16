---
description: Companies House provides a bulk file of companies and officers. The file is very large and in a proprietary format, where each line contains a single record. This page describes the different types of records found in the file.
---

# Officer bulk data record types
For more general information about the officers bulk file, see [officers bulk file](index.md).

There are 4 types of record found in the officer bulk data files:

- header record
- person record
- company record
- trailer record


The header record says what date the data was captured.

Person records have details about the officers of a company, such as name, date of birth and appointment date.

Company records only provide company name, status and the number of officers.

The trailer record can be used to validate the correct number of rows were read.

## Header record

First line in every file.

Sample:

```
DDDDSNAP289820210421
```

Header records are always 20 characters long.

The first 8 characters are always `DDDDSNAP` for snapshots and `DDDDUPDT` for updates.

The next 4 characters are the run number, in the example above `2898`.

The last 8 characters are the date of production of the file in the format `CCYYMMDD`,
so in the example above `20210421` means 21 April 2021.

## Trailer record

Last line of every file.

Sample:

```
9999999900000048
```

Trailer records are always 16 characters long.

The first 8 characters are always `99999999`.

The last 8 characters represent the number of records in the file (excluding header and trailer). It's padded with zeros
to always have a width of 8 characters. In the example above there were 48 records in the file.

## Company record

Company records contain details of a registered company.

Usually a company record is followed by the person records for that companies officers.

Sample:

```
FC0294761C                      00030031VITAMIN- SHOP NORTHERN IRELAND<
```

Company records are between 42 and 201 characters long, with an average of 65.

The first 8 characters are the company number of the company.

The next character indicates that the record is describing a company rather than a person, and it is always a `1` for
company records (whereas it's a `2` for person records).

The next character is a single character to represent the status of the company. It follows this mapping:

  ```
C=>Converted/closed company
D=>Dissolved company
L=>Company in liquidation
R=>Company in receivership
 =>None of the above categories
```

So in the example above, the company status is either converted or closed because the character is a `C`.

The next 22 characters are just white space fillers (padding).

The next 4 characters are an integer, which is the number of officers.
[This is how many person records will follow the company record.]

The next 4 characters are a zero-padded integer, which is the length of the company name which is to follow.
In the above example, it's `0031` so the name is 31 characters long.

Next is the variable length name, and a `<` chevron at the end of the line.

## Person record

This table is the official documentation of the data specification provided by Companies House, and the explainations that follow are modified from the documentations.

| Character | Data category | 	Length     | Data Item                                                                         |
|-----------|---------------|-------------|-----------------------------------------------------------------------------------|
| 1         | 	X            | 	8          | 	Company Number                                                                   |	
| 9         | 	9            | 	1          | 	Record Type                                                                      |	
| 10        | 	X            | 	1          | 	App Date Origin	                                                                 |
| 11        | 	9            | 	2          | 	Appointment Type	                                                                |
| 13        | 	9            | 	12         | 	Person Number                                                                    |	
| 25        | 	X            | 	1          | 	Corporate indicator	                                                             |
| 26        | 	X            | 	7          | 	Filler	                                                                          |
| 33        | 	X            | 	8          | 	Appointment Date	                                                                |
| 41        | 	X            | 	8          | 	Resignation Date	                                                                |
| 49        | 	X            | 	8          | 	Person Postcode                                                                  |	
| 57        | 	X            | 	8          | 	Partial Date of Birth	                                                           |
| 65        | 	X            | 	8          | 	Full Date of Birth	                                                              |
| 73        | 	9            | 	4          | 	Variable Data Length                                                             |	
| 77        | 	X            | 	1125 (max) | 	Variable Data (Name/ Address/ Occupation Nationality/Usual Residential Country ) |	


**Company number**: 8 character string, usually only containing numeric digits, but sometimes prefixed/suffixed with alphabet letters.

**Record type**: `2` for all person records (`1` for company records).

**App date origin**: 
This character can take one of six possible values, their meanings described in the table below:
| Value | Description |
|---|---|
| 1 | Appointment date taken from appointment document (includes 288a, AP01, AP02, AP03, AP04, RR01**, NI form 296, SEAP01, and SEAP02) |
| 2 | Appointment date taken from Annual Return (form 363) |
| 3 | Appointment date taken from incorporation document (includes form 10, IN01, NI form 21, SEFM01, SEFM02, SEFM03, SEFM04, SEFM05, SECV01, and SETR02) |
| 4 | Appointment date taken from LLP appointment document (includes LLP288a, LLAP01, LLAP02, and NI form LLP296a) |
| 5 | Appointment date taken from LLP incorporation document (includes LLP2, and LLIN01) |
| 6 | Appointment date taken from overseas company appointment document (includes BR4, OSAP01, OSAP02, OSAP03, and OSAP04) |

**	Appointment of secretary on re-registration from private company to PLC.

**Appointment type**:
Two digits which can take one of ten possible values, their meanings described in the table below:

| Value | Description |
|---|---|
| 00 | Current Secretary |
| 01 | Current Director |
| 04 | Current non-designated LLP Member |
| 05 | Current designated LLP Member |
| 11 | Current Judicial Factor |
| 12 | Current Receiver or Manager appointed under the Charities Act |
| 13 | Current Manager appointed under the CAICE Act |
| 17 | Current SE Member of Administrative Organ |
| 18 | Current SE Member of Supervisory Organ |
| 19 | Current SE Member of Management Organ |

**Person number**: A 12 digit unique numeric identifier for this person. The first 8 characters of the number identify the person, and the next 4 characters distinguish between different identifying details registed for the same person. The example below makes this more clear.

Example person number:
If John Smith had number `123456780001` and had the same details for all his appointments, and he then changes his URA for one of those appointments, he would be given new number `123456780002` in relation to that appointment; if he were to subsequently move all of his appointments to that URA then they will all merge on `123456780002`.

A similar incrementation would take place if `Miss Jane Harris` changed her name to `Mrs Jane Smith`.

**Corporate indicator**: Will be set to `Y` if the officer is a corporate body. Otherwise set to space.

**Filler**: This is always just whitespace.

**Appointment date**: See [date format](#date-format) below for format. If an Appointment Date is provided for Appointment Type 11, 12, or 13 this refers to the date that the form was registered; the actual date of appointment is not captured for these appointment types.

**Resignation date**: See [date format](#date-format) below for format.

**Person postcode**: Current postcode for officer Service Address.

**Partial date of birth**: Partial Date of Birth field will contain either all spaces, or a partial date of birth (century, year, month) followed by 2 space characters in the format `CCYYMM  `.  If Full Date of Birth is provided then Partial Date of Birth will also be provided.  However, Partial Date of Birth may be provided without Full Date of Birth.

**Full date of birth**: If full date of birth is available, its in the format described in [date format](#date-format), otherwise its just 8 spaces.

**Variable data length**: The length (number of characters) of the variable width data to follow. Includes all the deliminators.

**Variable data**: Contains officer’s name, Service Address, occupation, and nationality, formatted as follows:
`TITLE<FORENAMES<SURNAME<HONOURS<CARE OF<PO BOX<ADDRESS LINE 1<ADDRESS LINE 2<POST TOWN<COUNTY<COUNTRY<OCCUPATION<NATIONALITY<USUAL RESIDENTIAL COUNTRY<`

Each element of the variable data can be a maximum of 50 characters except SURNAME, CARE OF, PO BOX, ADDRESS LINE 1, USUAL RESIDENTIAL COUNTRY, OCCUPATION and NATIONALITY;
* SURNAME and USUAL RESIDENTIAL COUNTRY can both be a maximum of 160 characters;
* OCCUPATION and NATIONALITY can both be a maximum of 40 characters.
* CARE OF can be a maximum of 100 characters.
* PO BOX can be a maximum of 10 characters.
* ADDRESS LINE 1 can be a maximum of 251 characters.

Each variable data field will contain 14 “<” delimiters.
Consecutive “<” delimiters indicates that the particular element of the variable data is not present.


## Date format
Date fields will contain either spaces or an actual date in the format CCYYMMDD.  The value spaces will signify that Companies House does not have an actual date for that item.

Example: `20220810` represents 10 August 2022.
