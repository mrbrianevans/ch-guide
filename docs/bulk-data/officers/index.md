---
description: A guide to using the officers bulk data file from Companies House.
---

# Officers bulk data from Companies House

The officers bulk file is not publicly available, but can be requested by contacting Companies House. This can be done
via the developer forum, as seen in [this thread](https://forum.aws.chdev.org/t/can-we-bulk-download-officer-director-data/1225/194).

They will send you a data specification and a link to download the files from a cloud storage bucket.

The data is split into multiple files of ~ 800MB to 1GB. Each file has the `.dat` file extension and is a mixture of 
fixed width fields and variable width `<` deliminated values.

The official product code for the active officer appointments data snapshot is Product 195, 
and the corresponding update files are Product 198. Product 216 contains all officer appointments, including resigned officers.

## Data format

The data comes in about 9 files, named like this:
```
Prod195_2898_ew_3_21042021010001.dat
```

The files are plain text and records are seperated with the newline `\n` character.

Each file has a header (first line of file) and trailer (last line of file) record. In between the header and trailer records,
there are both person and company records.


The fixed length fields come first, with no separator between them. The variable length fields come last with a `<`
separator.

Details of the header, trailer, person and company records can be found in the data specification provided by Companies House,
and have been summarised [below](#record-types).

## Parsing tester
<script setup>
import OfficersRecordExplainer from '../../../components/OfficersRecordExplainer.vue'
</script>

A small tool to test parsing records from the bulk file. Detects what type of record it is, and then parses each of the values.

<OfficersRecordExplainer/>

[Full screen parser](parser.md)

## Size

This information is based on the April 2021 snapshot of prod 295:

- size of ZIP download from Companies House storage bucket: 1.28GB
- size of unzipped files: 6.58GB (split into 9 files)
- number of officer appointments: ~ 22.6 million
- number of companies: ~ 13.7 million

## Record types

There are 4 types of record found in the data files:

- header record
- person record 
- company record
- trailer record

The header record says what date the data was captured.
Person records have details about the officers of a company, such as name, date of birth and appointment date.
Company records only provide company name, status and the number of officers.
The trailer record can be used to validate the correct number of rows were read.

More details about each of the record types can be found in [officers/record types](recordTypes.md).

## Parsers
Some open source parsers I found on GitHub (not tested or verified):
 - [mattattui/chDirectorsParser](https://github.com/mattattui/chDirectorsParser) (PHP)
 - [Global-Witness/uk-companies-house-parsers-public](https://github.com/Global-Witness/uk-companies-house-parsers-public) (Python)
 - [garrettheaver/companieshouse](https://github.com/garrettheaver/companieshouse) (Java)
 - [ft-interactive/companies-house-appointments-importer](https://github.com/ft-interactive/companies-house-appointments-importer) (TypeScript (NodeJS))

There are also many generic fixed width file parsers available which can be used for parsing this file format.

## Officers update file

A daily update file is produced which can be used to keep an appointments database up-to-date. 
For more information on this file, see the [dedicated page](update-file/index.md).

## Disqualifications
A separate bulk file is produced which contains the current officer disqualifications. 
See the dedicated page for this file at [disqualifications](./disqualifications.md).
