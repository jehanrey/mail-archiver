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
  if (isAsc) {
    if (dateField) return moment(item1[attr], 'MM/DD/YYYY HH:mm:ss') - moment(item2[attr], 'MM/DD/YYYY HH:mm:ss')
    return item1[attr] > item2[attr] ? 1 : item2[attr] > item1[attr] ? -1 : 0
  } else {
    if (dateField) return moment(item2[attr], 'MM/DD/YYYY HH:mm:ss') - moment(item1[attr], 'MM/DD/YYYY HH:mm:ss')
    return item2[attr] > item1[attr] ? 1 : item1[attr] > item2[attr] ? -1 : 0
  }
}

export const withinDateRange = (date, fromDate, toDate) => {
  const momentDate = moment(date, 'MM/DD/YYYY HH:mm:ss')
  return momentDate.isBetween(fromDate, toDate)
}