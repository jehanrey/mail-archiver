import React from 'react'
import styled from 'styled-components'

const LabelText = styled.div`
  color: #666666;
  font-weight: bold;
  padding-bottom: 10px;

  span {
    font-size: 22px;
    padding: 0 2px 0 5px;
  }
`

const Label = ({ children }) => (
  <LabelText>
    {children}
  </LabelText>
)

export default Label