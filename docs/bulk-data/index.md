---
description: Companies House offers some bulk data download products to populate a database with companies, persons with significant control, officers and accounts data.
---

# Bulk Data products from Companies House

Companies House offers various bulk data products. 
Some of them are detailed on https://www.gov.uk/guidance/companies-house-data-products.

They consist of very large files containing a complete data set of the relevant data.

Bulk products are publicly available for a list of companies, persons with significant control (PSCs), and company accounts.

There is also a data product for officers data available only upon request to Companies House.


## Companies
The companies bulk data product is a CSV of all the currently (or recently) active companies registered in the UK. 
It contains basic company information and an up-to-date version is released each month. See more information on the 
dedicated page for [companies bulk data](/bulk-data/companies).


## Persons with significant control
The PSC bulk data product is in JSON format and contains a full list of PSCs provided to Companies House. It is updated
every day. For more details about the information included in the data, see the page for [psc bulk product](/bulk-data/psc).


## Accounts
A history of company accounts filed electronically is available as a bulk product. Records are only available for
accounts filed electronically since 2008, and does not include all companies. 
The files are a mixture of XML and [iXBRL](/bulk-data/accounts/ixbrl). 
They are available in a few different size chunks, such as yearly, monthly and daily for different perdiods of time.

The accounts include information such as assets, number of employees and creditors, but this depends on the filing type 
of each company and the disclosure requirements.

For more details about how to use the data product and what information is included, 
see the page for [accounts bulk data](/bulk-data/accounts/bulk-file).


## Officers
The officers bulk file is not publicly available, but can be requested by contacting Companies House. This can be done
via the developer forum, as seen in this thread: https://forum.aws.chdev.org/t/can-we-bulk-download-officer-director-data/1225/194.

Once they have contacted you regarding the bulk file, you will be emailed a link to a cloud storage bucket to download the files,
and they can also provide a data specification in Microsoft Word format, which is necessary for understanding the proprietary data format.

For more details on the data file, see the page on [officers bulk data](/bulk-data/officers/), and for details on the 
daily update file see [officers bulk daily updates](officers/update-file/).

## FTP products
There are many products which are only available via FTP upon special request to Companies House customer care. 
A list of these products can be found in [bulk products](bulk-products.md).
