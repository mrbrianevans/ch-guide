---
description: A guide to using the officers bulk data file from Companies House.
---

# Officers bulk data from Companies House

The officers bulk file is not publicly available, but can be requested by contacting Companies House. This can be done
via the developer forum, as seen in this thread: https://forum.aws.chdev.org/t/can-we-bulk-download-officer-director-data/1225/194.

They will send you a data specification and a link to download the files from a cloud storage bucket.

The data is split into multiple files of ~ 800MB to 1GB. Each file has the `.dat` file extension and is a mixture of 
fixed width fields and `<` deliminated values.

The official product code for the officer appointments data snapshot is Product 195, 
and the corresponding update files are Product 198.

## Format

The data comes in about 9 files, named like this:
```
Prod195_2898_ew_3_21042021010001.dat
```

The files are plain text and records are seperated with the newline `\n` character.

Each file has a header (first line of file) and trailer (last line of file) record. In between the header and trailer records,
there are both person and company records.

A sample record looks like this:

```
FC0296792300152256080001        20100625                                0076<MARK<CARTER<<<<UNIT D AIRPORT BUSINESS PARK<SWORDS ROAD<DUBLIN<<IRELAND<<<<
```

The fixed length fields come first, with no separator between them. The variable length fields come last with a `<`
separator.

Details of the header, trailer, person and company records can be found in the data specification provided by Companies House,
and may be added here in future for ease of access.

## Parsing tester
<script setup>
import OfficersRecordExplainer from '../../components/OfficersRecordExplainer.vue'
</script>

Try parsing a record from the bulk file. Paste one below to see the values.
<OfficersRecordExplainer/>
At the moment the parser can only handle person records.

## Size

This information is based on the April 2021 snapshot:

- size of ZIP download from Companies House storage bucket: 1.28GB
- size of unzipped files: 6.58GB (split into 9 files)
- number of officer appointments: 20,600,000

## Record types

There are 4 types of record found in the data files:

- header record
- person record 
- company record
- trailer record

The tail record can be used to validate the correct number of rows were read. The header record says what date the data
was captured. Company records only provide company name, status and the number of officers.

## Officers update file

A FTP file transfer once a day to keep up to date the bulk officers file.