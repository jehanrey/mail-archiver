import React, { useContext } from 'react'
import styled from 'styled-components'

import { MailList, DateRangeSearchBox } from 'views'
import { Label } from 'components'
import { MailsContext } from 'contexts'

const ApplicationWrapper = styled.div`
  padding: 30px 50px;
`

const App = () => {
  const { displayMail } = useContext(MailsContext)

  return (
    <ApplicationWrapper>
      <DateRangeSearchBox />
      <Label>Results:<span>{displayMail.length}</span>mail(s)</Label>
      <MailList />
    </ApplicationWrapper>
  )
}

export default App
