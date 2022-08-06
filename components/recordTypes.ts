

type RecordTypeFormat = {start: number, length: number, dataType: 'X'|'9', name: string}[]

export const PersonRecordFormat: RecordTypeFormat = [
  { start: 0, dataType: 'X', length: 8, name: 'Company Number' },
  { start: 8, dataType: '9', length: 1, name: 'Record Type' },
  { start: 9, dataType: 'X', length: 1, name: 'App Date Origin' },
  { start: 10, dataType: '9', length: 2, name: 'Appointment Type' },
  { start: 12, dataType: '9', length: 12, name: 'Person Number' },
  { start: 24, dataType: 'X', length: 1, name: 'Corporate indicator' },
  { start: 25, dataType: 'X', length: 7, name: 'Filler' },
  { start: 32, dataType: 'X', length: 8, name: 'Appointment Date' },
  { start: 40, dataType: 'X', length: 8, name: 'Resignation Date' },
  { start: 48, dataType: 'X', length: 8, name: 'Person Postcode' },
  {
    start: 56,
    dataType: 'X',
    length: 8,
    name: 'Partial Date of Birth'
  },
  { start: 64, dataType: 'X', length: 8, name: 'Full Date of Birth' },
  { start: 72, dataType: '9', length: 4, name: 'Variable Data Length' },
  {
    start: 76,
    dataType: 'X',
    length: 1125,
    name: 'Variable Data (Name/ Address/ Occupation Nationality/Usual Residential Country )'
  }
]

export const CompanyRecordFormat: RecordTypeFormat = [
  { start: 0, dataType: 'X', length: 8, name: 'Company Number' },
  { start: 8, dataType: '9', length: 1, name: 'Record Type' },
  { start: 9, dataType: 'X', length: 1, name: 'Company Status' },
  { start: 10, dataType: 'X', length: 22, name: 'Filler' },
  { start: 32, dataType: '9', length: 4, name: 'Number of Officers' },
  { start: 36, dataType: '9', length: 4, name: 'Company Name Length' },
  {
    start: 40,
    dataType: 'X',
    length: 161,
    name: 'Company Name (Delimited by "<")'
  }
]


export const HeaderRecordFormat: RecordTypeFormat = [
  { start: 0, dataType: 'X', length: 8, name: 'Header Identifier' },
  { start: 8, dataType: '9', length: 4, name: 'Run Number' },
  { start: 12, dataType: '9', length: 8, name: 'Production Date' }
]

export const TrailerRecordFormat: RecordTypeFormat = [
  { start: 0, dataType: 'X', length: 8, name: 'Trailer Identifier' },
  { start: 8, dataType: '9', length: 8, name: 'Record Count' }
]

/**
 * Splits a record line into the segments defined in the format.
 * Applies the dataType transformer (eg parseInt for numbers).
 * Does not trim any whitespace.
 * Returns an object where the keys are the segment names and the values are the values of those segments.
 * @param recordString - a line from the bulk file
 * @param format - a format to parse the segment with.
 */
export function parseString(recordString: string, format: RecordTypeFormat){
  return Object.fromEntries(format.map(segment=> {
    const value = recordString.slice(segment.start, segment.start + segment.length)
    const transformer = segment.dataType === '9' ? parseInt : s=>s
    return [segment.name, transformer(value)];
  }))
}

export function parseVariableData(keysFormat: string, valuesString: string){
  const keys = keysFormat.split('<').map(s=>(s)).filter(k=>k.length)
  const values = valuesString.split('<')
  return Object.fromEntries(keys.map((k,i)=>[k, values[i]]))
}


interface ParsedPersonRecord {
  'Company Number': string;
  'Record Type': number;
  'App Date Origin': string;
  'Appointment Type': number;
  'Person Number': number;
  'Corporate indicator': string;
  'Filler': string;
  'Appointment Date': string;
  'Resignation Date': string;
  'Person Postcode': string;
  'Partial Date of Birth': string;
  'Full Date of Birth': string;
  'Variable Data Length': number;
  'Variable Data (Name/ Address/ Occupation Nationality/Usual Residential Country )': string;
}


interface ParsedCompanyRecord {
  'Company Number': string;
  'Record Type': number;
  'Company Status': string;
  'Filler': string;
  'Number of Officers': number;
  'Company Name Length': number;
  'Company Name (Delimited by "<")': string;
}


interface ParsedHeaderRecord{
  'Header Identifier': string;
  'Run Number': number;
  'Production Date': number;
}

interface ParsedTrailerRecord {
  'Trailer Identifier': string;
  'Record Count': number;
}

export function parseRecord(record: string){
  let format = PersonRecordFormat
  let transformer = s => s
  if(record.length === 16){
    format = TrailerRecordFormat
    transformer = transformTrailerRecord
  }else if(record.length === 20){
    format = HeaderRecordFormat
    transformer = transformHeaderRecord
  }else{
    const recordType = record[8]
    if(recordType === '1') {
      format = CompanyRecordFormat;
      transformer = transformCompanyRecord
    }
    else if(recordType === '2') {
      format = PersonRecordFormat;
      transformer = transformPersonRecord
    }
  }
  const rawExtractedValues = parseString(record, format)

  return transformer(rawExtractedValues)
}

function transformPersonRecord(pr: ParsedPersonRecord){
  const personRecordVariableDataFormat = 'TITLE<FORENAMES<SURNAME<HONOURS<CARE OF<PO BOX<ADDRESS LINE 1<ADDRESS LINE 2<POST TOWN<COUNTY<COUNTRY<OCCUPATION<NATIONALITY<USUAL RESIDENTIAL COUNTRY<'
  const {'Variable Data (Name/ Address/ Occupation Nationality/Usual Residential Country )':variable, ...rest} = pr
  return {
    ...rest,
    ...parseVariableData(personRecordVariableDataFormat,variable)
  }
}

function transformHeaderRecord(hr: ParsedHeaderRecord){
  return hr
}

function transformTrailerRecord(tr: ParsedTrailerRecord){
  return tr
}

function transformCompanyRecord(cr: ParsedCompanyRecord){
  const companyRecordVariableDataFormat = 'COMPANY NAME<'
  const {"Company Name (Delimited by \"<\")":variable, ...rest} = cr
  return {
    ...rest,
    ...parseVariableData(companyRecordVariableDataFormat,variable)
  }
}
