import camelcase from "camelcase";


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

