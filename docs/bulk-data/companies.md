---
postName: Companies
tags:
  - companies
title: Companies bulk data from Companies House
description: A guide to using the companies bulk data CSV file from Companies House.
status: complete
---

# Companies basic data

Official download webpage for companies with basic information is available at http://download.companieshouse.gov.uk/en_output.html.

The file format is CSV.

Companies House official [FAQ](https://resources.companieshouse.gov.uk/infoAndGuide/faq/publicDataProduct.shtml).

There are about 5 million companies in the file. There is also an option to download the data as multiple smaller partitions.

## Sample
This is the header line:

```
CompanyName, CompanyNumber,RegAddress.CareOf,RegAddress.POBox,RegAddress.AddressLine1, RegAddress.AddressLine2,RegAddress.PostTown,RegAddress.County,RegAddress.Country,RegAddress.PostCode,CompanyCategory,CompanyStatus,CountryOfOrigin,DissolutionDate,IncorporationDate,Accounts.AccountRefDay,Accounts.AccountRefMonth,Accounts.NextDueDate,Accounts.LastMadeUpDate,Accounts.AccountCategory,Returns.NextDueDate,Returns.LastMadeUpDate,Mortgages.NumMortCharges,Mortgages.NumMortOutstanding,Mortgages.NumMortPartSatisfied,Mortgages.NumMortSatisfied,SICCode.SicText_1,SICCode.SicText_2,SICCode.SicText_3,SICCode.SicText_4,LimitedPartnerships.NumGenPartners,LimitedPartnerships.NumLimPartners,URI,PreviousName_1.CONDATE, PreviousName_1.CompanyName, PreviousName_2.CONDATE, PreviousName_2.CompanyName,PreviousName_3.CONDATE, PreviousName_3.CompanyName,PreviousName_4.CONDATE, PreviousName_4.CompanyName,PreviousName_5.CONDATE, PreviousName_5.CompanyName,PreviousName_6.CONDATE, PreviousName_6.CompanyName,PreviousName_7.CONDATE, PreviousName_7.CompanyName,PreviousName_8.CONDATE, PreviousName_8.CompanyName,PreviousName_9.CONDATE, PreviousName_9.CompanyName,PreviousName_10.CONDATE, PreviousName_10.CompanyName,ConfStmtNextDueDate, ConfStmtLastMadeUpDate
```
and this is a sample data line:
```
"!OBAC UK LIMITED","07687209","","","UNIT 9   BERRY COURT FARM BRAMLEY ROAD","LITTLE LONDON","TADLEY","HAMPSHIRE","","RG26 5AT","Private Limited Company","Active","United Kingdom","","29/06/2011","29","12","29/09/2022","31/12/2020","TOTAL EXEMPTION FULL","27/07/2017","29/06/2016","1","0","0","1","70229 - Management consultancy activities other than financial management","","","","0","0","http://business.data.gov.uk/id/company/07687209","15/07/2011","!OBAC FITTINGS LIMITED","","","","","","","","","","","","","","","","","","","13/07/2022","29/06/2021"
```

## Downloading latest file
New files are only released once a month, and always named after the first day of the month.

To programatically download the latest single file of companies, use this URL template (swapping `YYYY-MM` for the actual year and month):
```
http://download.companieshouse.gov.uk/BasicCompanyDataAsOneFile-YYYY-MM-01.zip
```
Example bash script to download and unzip the latest file:
```bash
today=$(date +"%Y-%m-01")
url="http://download.companieshouse.gov.uk/BasicCompanyDataAsOneFile-${today}.zip"
wget -nv -O companies.zip "$url"
unzip companies.zip
```
It should be noted that this script is somewhat simplified because it assumes that the current month has a release, which may not be the case (for example if you run the script on the first day of the month before the new file has been released). A more fail-proof script will check if the URL exists, and if not, try the previous month.

## Size guide
There are about 5 million companies in the file.

The ZIP file is about 400Mb and the CSV file is about 2Gb.

These numbers were accurate in 2021, but are subject to change in future.


## Importing into a database
If you would like to import this data into a Postgres database, you must first split the CSV into smaller partitions and then you can use psql to `COPY` the data directly into a table.

If you would like to import the data into MongoDB, you can do this directly using `mongoimport`.

```
mongoimport BasicCompanyDataAsOneFile.csv --headerline --type=csv
```
(you can also add your database credentials to that command, omitted for simplicity).

Using mongoimport will interpret some of the columns using dot notation syntax as nested properties of the object. For example the CSV headers `RegAddress.POBox,RegAddress.AddressLine1` will be interpreted as two nested properties of the `RegAddress` object. Therefore a full object after being imported into MongoDB will look like this:
```json
{
        "_id" : ObjectId("621774a02c9fcd020627d276"),
        "CompanyName" : "! LTD",
        "CompanyNumber" : 8209948,
        "RegAddress" : {
                "CareOf" : "",
                "POBox" : "",
                "AddressLine1" : "METROHOUSE 57 PEPPER ROAD",
                "AddressLine2" : "HUNSLET",
                "PostTown" : "LEEDS",
                "County" : "YORKSHIRE",
                "Country" : "",
                "PostCode" : "LS10 2RU"
        },
        "CompanyCategory" : "Private Limited Company",
        "CompanyStatus" : "Active",
        "CountryOfOrigin" : "United Kingdom",
        "DissolutionDate" : "",
        "IncorporationDate" : "11/09/2012",
        "Accounts" : {
                "AccountRefDay" : 30,
                "AccountRefMonth" : 9,
                "NextDueDate" : "30/06/2022",
                "LastMadeUpDate" : "30/09/2020",
                "AccountCategory" : "DORMANT"
        },
        "Returns" : {
                "NextDueDate" : "09/10/2016",
                "LastMadeUpDate" : "11/09/2015"
        },
        "Mortgages" : {
                "NumMortCharges" : 0,
                "NumMortOutstanding" : 0,
                "NumMortPartSatisfied" : 0,
                "NumMortSatisfied" : 0
        },
        "SICCode" : {
                "SicText_1" : "99999 - Dormant Company",
                "SicText_2" : "",
                "SicText_3" : "",
                "SicText_4" : ""
        },
        "LimitedPartnerships" : {
                "NumGenPartners" : 0,
                "NumLimPartners" : 0
        },
        "URI" : "http://business.data.gov.uk/id/company/08209948",
        "PreviousName_1" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_2" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_3" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_4" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_5" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_6" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_7" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_8" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_9" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "PreviousName_10" : {
                "CONDATE" : "",
                "CompanyName" : ""
        },
        "ConfStmtNextDueDate" : "25/09/2022",
        "ConfStmtLastMadeUpDate" : "11/09/2021"
}
```
