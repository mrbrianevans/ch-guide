---
description: Companies House publishes electronically filed financial accounts in daily and monthly bulk files. These are big ZIP files containing iXBRL accounts that can be scanned and parsed to get information such as the creditors, debtors, assets, equity and number of employees at each company.
---
# Accounts bulk files

Companies House publishes the financial accounts submitted to them. 
Individual accounts can be requested from their [Document API](/rest-api/document-api/filing.md), 
but this does not scale very much due to rate limiting. 
To scan accounts in bulk, they offer a bulk download product which contains all the accounts filed electronically in a certain period.

[Official bulk accounts docs](https://resources.companieshouse.gov.uk/infoAndGuide/faq/accountsDataProduct.shtml)

## Time periods available
Prod223 is daily accounts (accounts filed on a certain date).
Prod224 is monthly accounts (accounts filed in a certain month).

Daily accounts are available for public download from http://download.companieshouse.gov.uk/en_accountsdata.html for the last 60 days.

Monthly accounts are available for public download from http://download.companieshouse.gov.uk/en_monthlyaccountsdata.html
for the last 12 months.

Previous years monthly files are available from http://download.companieshouse.gov.uk/historicmonthlyaccountsdata.html, and go back to 2008.

## Download format
The bulk downloads are in ZIP format, which can be decompressed using the  Linux [`unzip`](https://www.linux.org/docs/man1/unzip.html) command or [7-Zip](https://www.7-zip.org/) on Windows.

Inside the ZIP archive, there are many `.html` files (iXBRL) and a few `.xml` files (XBRL).

The file names follow the format:
```
Prod{PRODUCT NUMBER}_{RUN NUMBER}_{COMPANY NUMBER}_{DATE in YYYYMMDD}.{html or xml}
```
For example:
```
Prod224_0078_00007464_20190930.html
```

## File format
Only electronically filed accounts are available in the bulk download, and they are in the [iXBRL format](https://www.xbrl.org/the-standard/what/ixbrl/).

For more documentation about interpreting iXBRL and some sample data, see the [iXBRL page](ixbrl.md).

## How many are filed electronically
I did a sample of 600 random companies to see how many have filed electronic accounts over the last 20 years.
These are not perfectly accurate, just estimates based on my random sample.

| Year | % electronic  |
|------|---------------|
| 2005 | 0.00 %        |
| 2006 | 0.56 %        |
| 2007 | 2.89 %        |
| 2008 | 5.36 %        |
| 2009 | 9.79 %        |
| 2010 | 16.05 %       |
| 2011 | 21.62 %       |
| 2012 | 25.27 %       |
| 2013 | 35.93 %       |
| 2014 | 43.78 %       |
| 2015 | 47.39 %       |
| 2016 | 50.45 %       |
| 2017 | 53.55 %       |
| 2018 | 61.06 %       |
| 2019 | 66.19 %       |
| 2020 | 71.65 %       |
| 2021 | 70.89 %       |
| 2022 | 73.78 %       |
