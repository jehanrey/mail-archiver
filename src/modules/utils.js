import moment from 'moment'

export const calculateDateDisplay = (date) => {
  const today = moment()
  const parsedDate = moment(date, 'MM/DD/YYYY HH:mm:ss')
  if (today.diff(parsedDate, 'days') === 1) return parsedDate.format('HH:mm')
  if (today.format('YYYY') === parsedDate.format('YYYY')) return parsedDate.format('MMM DD')
  return parsedDate.format('YYYY/MM/DD')
}

export const sorter = (item1, item2, attr, sortOrder) => {
  const isAsc = sortOrder === 'asc'
  const dateField = attr.toLowerCase().includes('date')
  const numeric = /^\d+$/.test(item1) && /^\d+$/.test(item2)
  const lowerCaseItem1 = typeof item1[attr] === 'object' ? item1[attr][0].toLowerCase() : item1[attr].toLowerCase()
  const lowerCaseItem2 = typeof item2[attr] === 'object' ? item2[attr][0].toLowerCase() : item2[attr].toLowerCase()
  if (isAsc) {
    if (dateField) return moment(item1[attr], 'MM/DD/YYYY HH:mm:ss') - moment(item2[attr], 'MM/DD/YYYY HH:mm:ss')
    if (numeric) return item1[attr] > item2[attr] ? 1 : item2[attr] > item1[attr] ? -1 : 0
    return lowerCaseItem1 > lowerCaseItem2 ? 1 : lowerCaseItem2 > lowerCaseItem1 ? -1 : 0
  } else {
    if (dateField) return moment(item2[attr], 'MM/DD/YYYY HH:mm:ss') - moment(item1[attr], 'MM/DD/YYYY HH:mm:ss')
    if (dateField) return moment(item1[attr], 'MM/DD/YYYY HH:mm:ss') - moment(item2[attr], 'MM/DD/YYYY HH:mm:ss')
    return lowerCaseItem2 > lowerCaseItem1 ? 1 : lowerCaseItem1 > lowerCaseItem2 ? -1 : 0
  }
}

export const withinDateRange = (date, fromDate, toDate) => {
  const momentDate = moment(date, 'MM/DD/YYYY HH:mm:ss')
  return momentDate.isBetween(fromDate, toDate)
}