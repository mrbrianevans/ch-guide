---
description: Companies House provides a bulk file of companies and officers. The file is very large and in a proprietary format, where each line contains a single record. This page describes the different types of records found in the file.
---

# Officer bulk data record types
For more general information about the officers bulk file, see [officers bulk file](../officers.md).

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

This table is the official documentation of the data specification provided by Companies House.

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
