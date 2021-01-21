import React, {
  useEffect,
  useContext,
} from 'react'
import styled from 'styled-components'

import { MailList, DateRangeSearchBox } from 'views'
import { Label } from 'components'
import { MailsContext } from 'contexts'
import { getMail } from 'services/mail'

const ApplicationWrapper = styled.div`
  padding: 30px 0;
`

const App = () => {
  const {
    setLoading,
    setMails,
    displayMail,
  } = useContext(MailsContext)

  useEffect(() => {
    retrieveMail()
  }, [])

  const retrieveMail = () => {
    setLoading(true)
    getMail()
      .then(({ data }) => setMails(data))
      .catch(() => setMails([]))
      .finally(() => setLoading(false))
  }

  return (
    <ApplicationWrapper>
      <DateRangeSearchBox />
      <Label>Results:<span>{displayMail.length}</span>mail(s)</Label>
      <MailList />
    </ApplicationWrapper>
  )
}

export default App
