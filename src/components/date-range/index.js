import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const DateRange = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [shouldClose, setShouldClose] = useState(false)

  const renderDate = `${moment(startDate, 'MM/DD/YYYY HH:mm:ss').format('YYYY/MM/DD')} - ${moment(endDate, 'MM/DD/YYYY HH:mm:ss').format('YYYY/MM/DD')}`

  const onDatesChange = (dates) => {
    const [start, end] = dates
    !end && setShouldClose(true)
    setStartDate(start)
    setEndDate(end)
  }

  const onOpenCalendar = () => {
    setStartDate(null)
    setEndDate(null)
    setShouldClose(false)
  }

  const onCloseCalendar = () => setShouldClose(false)

  return (
    <DatePicker
      onChange={onDatesChange}
      placeholderText="Select Dates"
      startDate={startDate}
      endDate={endDate}
      openToDate={new Date()}
      value={!endDate ? new Date() : renderDate}
      onCalendarOpen={onOpenCalendar}
      onCalendarClose={onCloseCalendar}
      shouldCloseOnSelect={shouldClose}
      selectsRange
      peekNextMonth
      minDate={startDate || undefined}
      showPopperArrow={false}
    />
  )
}

export default DateRange