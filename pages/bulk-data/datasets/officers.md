---
postName: Officers
tags: 
    - officers
    - directors
    - secretary
description: A guide to using the officers bulk data file from Companies House.
---

# Officers data

Officers bulk downloads are not available for download on a website. You have to send them a message on their API forum
and they send a link via email to download current officers data.

The file is a mixture of fixed width fields and `<` deliminated values

# Bulk officers data

Companies House does not publish a bulk download of officers data on their website, but if you message them on the
forum, they send you an email with a link to download it.

## Format

The data comes in 9 files, each with the `.dat` extension.

Records are seperated with the newline `\n` character. A sample record looks like this:

```
FC0296792300152256080001        20100625                                0076<MARK<CARTER<<<<UNIT D AIRPORT BUSINESS PARK<SWORDS ROAD<DUBLIN<<IRELAND<<<<
```

The fixed length fields come first, with no separator between them. The variable length fields come last with a `<`
separator.

## Size

This information is based on the April 2021 snapshot:

- size of ZIP download from companies house: 1.28GB
- size of unzipped files: 6.58GB (split into 9 files)
- size of data converted to CSV: 3.82GB
- number of officer appointments (rows): 20,600,000
- officers table in postgres (unlogged, no indexes): 4521 MB

## Record types

There are 4 types of record found in the data files:

- header record
- person record (show above)
- company record
- tail record

The tail record can be used to validate the correct number of rows were read. The header record says what date the data
was captured. Company records are discarded as they only provide company name, status and the number of officers.

## Officers update file

A FTP file transfer once a day to keep up to date the bulk officers file.
