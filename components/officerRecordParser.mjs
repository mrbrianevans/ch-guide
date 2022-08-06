// import camelcase from "camelcase";
// can't get imports to work with commonjs/es module. Won't allow require(), import {}, or await import().
function camelcase(str) {
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
  {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

const example = "FC0296792300152256080001        20100625                                0076<MARK<CARTER<<<<UNIT D AIRPORT BUSINESS PARK<SWORDS ROAD<DUBLIN<<IRELAND<<<<"

//todo: write a Regex for header, company, person and trailer records

const recordTypes = {
  '1': 'Company',
  '2': 'Person'
}

const appointmentTypes = {
  '11': 'Current Judicial Factor',
  '12': 'Current Receiver or Manager appointed under the Charities Act',
  '13': 'Current Manager appointed under the CAICE Act',
  '17': 'Current SE Member of Administrative Organ',
  '18': 'Current SE Member of Supervisory Organ',
  '19': 'Current SE Member of Management Organ',
  '00': 'Current Secretary',
  '01': 'Current Director',
  '04': 'Current non-designated LLP Member',
  '05': 'Current designated LLP Member'
}

const corporateIndicators = {
  'Y': true,
  ' ': false
}

function parseDate(date){
  return {
    year: date.slice(0,4).trim(),
    month: date.slice(4,6).trim(),
    day: date.slice(6).trim()
  }
}

function parseVariableData(data){
  const format = 'TITLE<FORENAMES<SURNAME<HONOURS<CARE OF<PO BOX<ADDRESS LINE 1<ADDRESS LINE 2<POST TOWN<COUNTY<COUNTRY<OCCUPATION<NATIONALITY<USUAL RESIDENTIAL COUNTRY<'
  const keys = format.split('<').map(s=>camelcase(s)).filter(k=>k.length)
  const values = data.split('<')
  return Object.fromEntries(keys.map((k,i)=>[k, values[i]]))
}

export function parseOfficerPersonRecord(officerRecord){
  if(officerRecord.length < 21) return null
  return {
    companyNumber: officerRecord.slice(0,8),
    recordType: recordTypes[officerRecord.at(8)],
    appointmentDateOrigin: officerRecord.at(9),
    appointmentType: appointmentTypes[officerRecord.slice(10,12)],
    personNumber: officerRecord.slice(12,24),
    corporateIndicator: corporateIndicators[officerRecord.at(24)],
    appointmentDate: parseDate(officerRecord.slice(32, 40)),
    resignationDate: parseDate(officerRecord.slice(40, 48)),
    postcode: officerRecord.slice(48,56).trim(),
    partialDateOfBirth: parseDate(officerRecord.slice(56, 64)),
    fullDateOfBirth: parseDate(officerRecord.slice(64, 72)),
    variableDataLength: parseInt(officerRecord.slice(72,76)),
    variableData: parseVariableData(officerRecord.slice(76))
  }
}

/*
Person record: -----------------------------------------------
Character Position	Data Category	Length	Data Item
1	X	8	Company Number
9	9	1	Record Type
10	X	1	App Date Origin
11	9	2	Appointment Type
13	9	12	Person Number
25	X	1	Corporate indicator
26	X	7	Filler
33	X	8	Appointment Date
41	X	8	Resignation Date
49	X	8	Person Postcode
57	X	8	Partial Date of Birth
65	X	8	Full Date of Birth
73	9	4	Variable Data Length
77	X	1125 (max)	Variable Data (Name/ Address/ Occupation Nationality/Usual Residential Country )
-------------------------------------------------------------

Company record: ---------------------------------------------
Character Position	Data Category	Length	Data Item
1	X	8	Company Number
9	9	1	Record Type
10	X	1	Company Status
11	X	22	Filler
33	9	4	Number of Officers
37	9	4	Company Name Length
41	X	161	Company Name (Delimited by “<”)
-------------------------------------------------------------

Header record: ---------------------------------------------
1	X	8	Header Identifier
9	9	4	Run Number
13	9	8	Production Date
-------------------------------------------------------------

Trailer record: ---------------------------------------------
1	X	8	Trailer Identifier
9	9	8	Record Count
-------------------------------------------------------------

 */
