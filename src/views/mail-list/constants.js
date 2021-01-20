import React from 'react'
import styled from 'styled-components'

import {
  Recipients,
  Subject,
} from 'components'
import { calculateDateDisplay, sorter } from 'modules/utils'

const DateData = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
`

export const mailListColumns = [
  {
    key: 'sender',
    title: 'From',
    render: ({ sender }) => <span>{sender}</span>,
    width: '20%',
    sort: ({ item1, item2, sortDirection }) => sorter(item1, item2, 'sender', sortDirection),
  },
  {
    key: 'recipient',
    title: 'To',
    render: ({ recipient }) => (
      <Recipients
        recipients={recipient}
        renderCount={1}
      />
    ),
    width: '25%',
    sort: ({ item1, item2, sortDirection }) => sorter(item1, item2, 'recipient', sortDirection),
  },
  {
    key: 'subject',
    title: 'Subject',
    render: ({ subject, withAttachment }) => (
      <Subject
        subject={subject}
        withAttachment={withAttachment}
      />
    ),
    width: '45%',
    sort: ({ item1, item2, sortDirection }) => sorter(item1, item2, 'subject', sortDirection),
  },
  {
    key: 'date',
    title: 'Date',
    render: ({ date }) => <DateData>{calculateDateDisplay(date)}</DateData>,
    width: '10%',
    sort: ({ item1, item2, sortDirection }) => sorter(item1, item2, 'date', sortDirection),
  },
]