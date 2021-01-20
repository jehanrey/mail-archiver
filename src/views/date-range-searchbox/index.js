import React, { useContext } from 'react'
import styled from 'styled-components'

import { MailsContext } from 'contexts'
import { DateRange } from 'components'
import { CalendarIcon, SearchIcon } from 'icons'

const InputWrapper = styled.div`
  width: 275px;
  padding: 10px;
  border: 2px solid #D3D3D3;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .react-datepicker-wrapper {
    flex: 1;
    input {
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: transparent;
      text-shadow: 0 0 0 #333333;
      width: 80%;
      &:focus {
        outline: none;
      }
    }
  }

  .react-datepicker-popper {
    margin-top: 20px;
  }

  img {
    height: 18px;
    padding: 0 5px;
  }

  & > button {
    height: 100%;
    width: 45px;
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    border-left: 2px solid #D3D3D3;
    border-radius: 0 10px 10px 0;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`

const DateRangeSearchBox = () => {
  const {
    filterAndSortMail,
    fromDate,
    toDate,
    setFromDate,
    setToDate,
  } = useContext(MailsContext)

  return (
    <InputWrapper>
      <img src={CalendarIcon} alt="calendar" />
      <DateRange
        startDate={fromDate}
        endDate={toDate}
        setStartDate={setFromDate}
        setEndDate={setToDate}
      />
      <button onClick={filterAndSortMail}>
        <img src={SearchIcon} alt="search" />
      </button>
    </InputWrapper>
)
}

export default DateRangeSearchBox