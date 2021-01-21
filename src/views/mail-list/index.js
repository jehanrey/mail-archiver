import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import styled from 'styled-components'

import { MailsContext } from 'contexts'
import {
  ExpandingTable,
  CardList,
  Loader,
} from 'components'
import { LogoIcon } from 'icons'
import { mailListColumns } from './constants'
import CardItem from './card-item'

const MailListWrapper = styled.div`
  height: 80vh;
  overflow: hidden;
`

const StateWrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 125px;
  }
`

const whenLoading = (loading) => loading && (
  <StateWrapper>
    <Loader />
  </StateWrapper>
)

const whenEmpty = (data) => data.length < 1 && (
  <StateWrapper>
    <img src={LogoIcon} alt="logo" />
  </StateWrapper>
)

const MailList = () => {
  const {
    loading,
    displayMail,
    triggerSort,
    sortColumn,
    sortDirection,
  } = useContext(MailsContext)
  const [largeScreen, setLargeScreen] = useState(window.innerWidth > 568)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 568px)')
    mediaQuery.addEventListener('change', checkResolution)
    return () => mediaQuery.removeEventListener('change', checkResolution)
  }, [])

  const checkResolution = (e) => setLargeScreen(e.matches)

  return (
    <MailListWrapper>
      {whenLoading(loading) || whenEmpty(displayMail) || (largeScreen ? (
          <ExpandingTable
            columns={mailListColumns}
            data={displayMail}
            triggerSort={triggerSort}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            expandedContentKey='content'
          />
        ) : (
          <CardList
            columns={mailListColumns}
            showHeader
            data={displayMail}
            triggerSort={triggerSort}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            expandedContentKey='content'
            cardComponent={CardItem}
          />
      ))}
    </MailListWrapper>
  )
}

export default MailList