import React from 'react'
import styled from 'styled-components'

const RecipientsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  div {
    background: #888888;
    color: #FFFFFF;
    padding: 3px 5px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 25%;
  }
`

const Recipients = ({
  recipients,
  renderCount,
}) => {
  const multipleRecipients = recipients.length > renderCount

  return (
    <RecipientsWrapper>
      <span>
        {`${recipients.map((recipient, index) => {
            if (index === 0) return recipient
            if (index <= renderCount - 1) return `, ${recipient}`
            return null
          }).join('')}${multipleRecipients ? ', ...' : ''}
        `}
      </span>
      {multipleRecipients && <div>{`+${recipients.length - renderCount}`}</div>}
    </RecipientsWrapper>
  )
}

export default Recipients