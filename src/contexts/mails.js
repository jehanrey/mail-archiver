import React, {
  useState,
  useEffect,
  createContext,
} from 'react'

import { withinDateRange } from 'modules/utils'

export const MailsContext = createContext()

export const MailsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [mails, setMails] = useState([])
  const [displayMail, setDisplayMail] = useState([])
  const [sorterFn, setSorterFn] = useState(() => () => {})
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)

  useEffect(() => {
    setDisplayMail(mails)
    resetSortAndFilters()
  }, [mails])

  useEffect(() => {
    filterAndSortMail()
  }, [sortColumn, sortDirection])

  const resetSortAndFilters = () => {
    setSorterFn(() => () => {})
    setSortColumn(null)
    setSortDirection(null)
    setFromDate(null)
    setToDate(null)
  }

  const filterMailForDisplay = (dataSet) => {
    if (!!fromDate && !!toDate) {
      return [...dataSet.filter(({ date }) => withinDateRange(date, fromDate, toDate))]
    } else {
      return [...dataSet]
    }
  }

  const sortMailForDisplay = (dataSet) => {
    if (!sortDirection) {
      return [...dataSet]
    } else {
      return [...dataSet.sort((item1, item2) => sorterFn({ item1, item2, sortDirection }))]
    }
  }

  const changeSortDirection = () => {
    if (sortDirection === 'asc') {
      setSortDirection('desc')
    } else if (sortDirection === 'desc') {
      setSortDirection(null)
    } else {
      setSortDirection('asc')
    }
  }

  const triggerSort = ({ key, sort }) => {
    if (key === sortColumn) {
      changeSortDirection()
    } else {
      setSortColumn(key)
      setSorterFn(() => sort)
      setSortDirection('asc')
    }
  }

  const filterAndSortMail = () => {
    const filteredMailList = filterMailForDisplay(mails)
    const sortedMailList = sortMailForDisplay(filteredMailList)
    setDisplayMail([...sortedMailList])
  }

  return (
    <MailsContext.Provider
      value={{
        loading,
        setLoading,
        mails,
        setMails,
        displayMail,
        sortColumn,
        sortDirection,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        triggerSort,
        filterAndSortMail,
      }}
    >
      {children}
    </MailsContext.Provider>
  )
}