import React, {
  useState,
  useEffect,
  useContext,
} from 'react'

import { MailsContext } from 'contexts'
import { ExpandingTable } from 'components'
import { mailListColumns } from './constants'

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
  const [largeScreen, setLargeScreen] = useState(window.innerWidth > 768)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    mediaQuery.addEventListener('change', checkResolution)
    return () => mediaQuery.removeEventListener('change', checkResolution)
  }, [])

  const checkResolution = (e) => setLargeScreen(e.matches)

  return (
    <div>
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
          <div>Card View</div>
        )
      }
    </div>
  )
}

export default MailList