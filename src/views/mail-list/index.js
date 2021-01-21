import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import styled from 'styled-components'

import { MailsContext } from 'contexts'
import { ExpandingTable, CardList } from 'components'
import { mailListColumns } from './constants'
import CardItem from './card-item'

const MailListWrapper = styled.div`
  height: 80vh;
  overflow: hidden;
`

const whenLoading = (loading) => (
  loading && <div>Loader</div>
)

const whenEmpty = (data) => (
  data.length < 1 && <div>Empty</div>
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
      {whenLoading(loading) || whenEmpty(displayMail) || largeScreen ? (
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
        )
      }
    </MailListWrapper>
  )
}

export default MailList