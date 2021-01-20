import React from 'react'
import styled from 'styled-components'

import { AttachmentIcon } from 'icons'

const SubjectData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    height: 20px;
  }
`

const Subject = ({ subject, withAttachment }) => (
  <SubjectData>
    <span>{subject}</span>
    {withAttachment && <img src={AttachmentIcon} alt="clip" />}
  </SubjectData>
)

export default Subject