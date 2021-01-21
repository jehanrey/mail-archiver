import React, {
  useContext,
  useState,
  useEffect,
} from 'react'
import styled from 'styled-components'

import { MailsContext } from 'contexts'
import { Recipients } from 'components'
import {
  MailIcon,
  ToggleContentIcon,
  AttachmentIcon,
} from 'icons'
import { calculateDateDisplay } from 'modules/utils'

const CardWrapper = styled.div`
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #DEDEDE;
  ${({ expanded }) => expanded && `
    background: #F5F8FA;
    color: #0E28E6;
  `}

  &:hover {
    background: #F5F8FA;
    color: #0E28E6;
  }
`

const MailHeader = styled.div`
  display: flex;
  align-items: center;

  & > img {
    height: 26px;
    padding-right: 5px;
  }
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 0 5px;

  & > div:first-of-type {
    display: flex;
    padding-bottom: 2px;

    & > span:first-of-type {
      font-weight: bold;
      flex: 1;
      display: flex;
      justify-content: space-between;

      img {
        height: 15px;
        vertical-align: middle;
        padding: 0 5px 0 0;
      }
    }

    & > span:last-of-type {
      position: relative;
      padding-right: 10px;
      img {
        position: absolute;
        right: 0;
        top: 25%;
        height: 6px;
        transform: ${({ expanded }) => expanded ? 'rotate(90deg)' : '0'};
      }
    }
  }
`

const MailSubject = styled.div`
  padding-top: 5px;
  font-size: 18px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const MailContent = styled.div`
  visibility: ${({ expanded }) => expanded ? 'visible' : 'hidden'};
  opacity: ${({ expanded }) => expanded ? '1' : '0'};
  height: ${({ expanded }) => expanded ? 'auto' : '0'};
  padding: 20px 15px;
  border-bottom: 1px solid #DEDEDE;
  background: #FEFEFE;
  transition: height 0.3s linear, opacity 0.5s linear;
  color: #666666;
  font-size: 14px;
`

const CardItem = ({
  item,
  index,
}) => {
  const {
    sender,
    recipient,
    date,
    subject,
    withAttachment,
    content,
  } = item
  const { sortDirection, SortColumn } = useContext(MailsContext)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(false)
  }, [item, sortDirection, SortColumn])

  return (
    <>
      <CardWrapper
        key={`card-item-${index}`}
        expanded={expanded}
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        <MailHeader>
          <img src={MailIcon} alt="mail" />
          <HeaderContent expanded={expanded}>
            <div>
              <span>
                {sender}
                {withAttachment && <img src={AttachmentIcon} alt="clip" />}
              </span>
              <span>
                {calculateDateDisplay(date)}
                <img src={ToggleContentIcon} alt="arrow" />
              </span>
            </div>
            <Recipients
              recipients={recipient}
              renderCount={2}
            />
          </HeaderContent>
        </MailHeader>
        <MailSubject>{subject}</MailSubject>
      </CardWrapper>
      {expanded && <MailContent expanded={expanded}>{content}</MailContent>}
    </>
  )
}

export default CardItem