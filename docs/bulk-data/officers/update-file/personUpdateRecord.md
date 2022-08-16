---
description: The Companies House daily update files for the officer appointments dataset contain records showing updates to officer appointments, and this page describes the format of those records and the meaning of the mapped values. This may be of help if you are writing a parser for the update file. 
---

# Person update record

The update file contains these records to show updates to officer appointments. For details relating to the update file,
see [officer update file](index.md).

## Data Table
| Character Position | Data Category | Length     | Data Item                                               |
|--------------------|---------------|------------|---------------------------------------------------------|
| 1                  | X             | 8          | [Company Number](#company-number)                       |
| 9                  | 9             | 1          | [Record Type](#record-type)                             |
| 10                 | X             | 1          | [App Date Origin](#app-date-origin)                     |
| 11                 | X             | 1          | [Res Date Origin](#res-date-origin)                     |
| 12                 | X             | 1          | [Correction indicator](#correction-indicator)           |
| 13                 | X             | 1          | [Corporate indicator](#corporate-indicator)             |
| 14                 | X             | 2          | [Filler](#filler)                                       |
| 16                 | 9             | 2          | [Old Appointment Type](#old-appointment-type)           |
| 18                 | 9             | 2          | [New Appointment Type](#new-appointment-type)           |
| 20                 | 9             | 12         | [Old Person Number](#old-person-number)                 |
| 32                 | 9             | 12         | [New Person Number](#new-person-number)                 |
| 44                 | X             | 8          | [Partial Date of Birth](#partial-date-of-birth)         |
| 52                 | X             | 8          | [Full Date of Birth](#full-date-of-birth)               |
| 60                 | X             | 8          | [Old Person Postcode](#old-person-postcode)             |
| 68                 | X             | 8          | [New Person Postcode](#new-person-postcode)             |
| 76                 | X             | 8          | [Appointment Date](#appointment-date)                   |
| 84                 | X             | 8          | [Resignation Date](#resignation-date)                   |
| 92                 | X             | 8          | [Change Date](#change-date)                             |
| 100                | X             | 8          | [Update Date](#update-date)                             |
| 108                | 9             | 4          | [Variable Data Length](#variable-data-length)           |
| 112                | X             | 1138 (max) | [Variable Data (variable length field)](#variable-data) |



### Company Number
Company Number of the appointment. For more details about company numbers and their format, see [Company numbers](/general/company-number.md).

### Record Type
Record Type is always `2` for person update records, whereas its `1` for company update records.

### App Date Origin
The source document of the appointment date.

This single character can take one of six possible values, their meanings described in the table below:

| Value | Description                                                                                                                                                                          |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Appointment/Resignation date taken from appointment/termination document (includes 288a, 288b, AP01, AP02, AP03, AP04, RR01**, TM01, TM02, NI form 296, SEAP01, SEAP02, and SETM01). |
| 2     | Appointment/Resignation date taken from annual return document (includes 363s, AR01, and NI form 371, plus LLP363s and LLAR01).                                                      |
| 3     | Appointment date taken from incorporation document (includes form 10, IN01, NI form 21, SEFM01, SEFM02, SEFM03, SEFM04, SEFM05, SECV01, and SETR02).                                 |
| 4     | Appointment/Resignation date taken from LLP appointment/termination document (includes LLP288a, LLP288b, LLAP01, LLAP02, LLTM01, and NI forms LLP296a and LLP296b).                  |
| 5     | Appointment date taken from LLP incorporation document (includes LLP2, and LLIN01).                                                                                                  |
| 6     | Appointment/Resignation date taken from overseas company appointment/termination document (includes BR4, OSAP01, OSAP02, OSAP03, OSAP04, OSTM01, and OSTM02).                        |
| space | Appropriate date not yet allocated.                                                                                                                                                  |

**	Appointment of secretary on re-registration from private company to PLC.

### Res Date Origin
The source document of the resignation date. Same mapping as described above in [app date origin](#app-date-origin).

### Correction indicator
The correction indicator can be either a space ` ` or a `Y`. If it's set to `Y`, this indicates that the record is a correction.

### Corporate indicator
Corporate indicator can be either a space ` ` or a `Y`. If it's set to `Y`, this indicates that the officer is a corporate body.

### Filler
Filler whitespace.

### Old Appointment Type
Old Appointment Type is a 2-digit number, which will be one of the following:

| Value | Meaning                                                        |
|-------|----------------------------------------------------------------|
| 00    | Current Secretary                                              |
| 01    | Current Director                                               |
| 02    | Resigned Secretary                                             |
| 03    | Resigned Director                                              |
| 04    | Current non-designated LLP Member                              |
| 05    | Current designated LLP Member                                  |
| 06    | Resigned non-designated LLP Member                             |
| 07    | Resigned designated LLP Member                                 |
| 11    | Current Judicial Factor                                        |
| 12    | Current Receiver or Manager appointed under the Charities Act  |
| 13    | Current Manager appointed under the CAICE Act                  |
| 14    | Resigned Judicial Factor                                       |
| 15    | Resigned Receiver or Manager appointed under the Charities Act |
| 16    | Resigned Manager appointed under the CAICE Act                 |
| 17    | Current SE Member of Administrative Organ                      |
| 18    | Current SE Member of Supervisory Organ                         |
| 19    | Current SE Member of Management Organ                          |
| 20    | Resigned SE Member of Administrative Organ                     |
| 21    | Resigned SE Member of Supervisory Organ                        |
| 22    | Resigned SE Member of Management Organ                         |
| 99    | Any Errored appointment                                        |

### New Appointment Type
New Appointment Type is a 2-digit number to represent the new appointment type (officer role), 
and the table of appointment types which correspond to the possible values can be found in [Old Appointment Type](#old-appointment-type).

### Old Person Number
This is the previous 12-digit numerical identifier for the officer.

### New Person Number
This is the new 12-digit numerical identifier for the officer.

### Partial Date of Birth
Partial Date of Birth is date of birth of the officer without the day of month included. It's in the format `CCYYMM  `.
For example `198902  ` means February 1989. This is not always available, in which case it will just be 8 spaces. If full
date of birth is available, then partial date of birth will also be provided. The date format can be found in the [date format section](#date-format).

### Full Date of Birth
Full Date of Birth is the date of birth of the officer accurate to the day of month. It's in the form `CCYYMMDD`.
For example `19570913` would be 13 September 1957. The date format can be found in the [date format section](#date-format).

### Old Person Postcode
This field can contain spaces (meaning value not held by Companies House) or the postcode of the officer's previous address.

### New Person Postcode
This field can contain spaces (meaning value not held by Companies House) or the postcode of the officer's new address.

### Appointment Date
Appointment Date of the officer. The date format can be found in the [date format section](#date-format).

### Resignation Date
Resignation Date of the officer. The date format can be found in the [date format section](#date-format).

### Change Date
Change Date. The date format can be found in the [date format section](#date-format).

### Update Date
Update Date. The date format can be found in the [date format section](#date-format).

### Variable Data Length
The number of characters length of the next field which is variable data (including chevron separators).

### Variable Data 
Variable Data (variable length field) contains chevron (`<`) separated values. This field will always contain 27 chevrons.
Where chevrons occur consecutively, e.g. `<<<<`, the data items that they terminate are
not supplied. Thus, if chevron #4 immediately follows chevron #3, this indicates that "New
Honours" is not supplied.

The order of the values is this:
```
New Title<New Forenames<New Surname<New Honours<Care Of<PO Box<New Address Line 1<New Address Line 2<New Post Town<New County<New Country<Occupation<New Nationality<New Residential Country<<<<<<<<<<<<<<
```

## Date format
Date fields will contain either spaces or an actual date in the format `CCYYMMDD`.  
The value spaces will signify that Companies House does not have an actual date for that item.

Example: `20220810` represents 10 August 2022.
