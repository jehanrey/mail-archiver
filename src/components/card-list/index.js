import React from 'react'
import styled from 'styled-components'

import { SortDirectionIcon } from 'icons'

const HeaderWrapper = styled.div`
  height: 40px;
  background: #F5F5F5;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
`

const HeaderItem = styled.span`
  color: ${({ sorting }) => sorting ? '#111111' : '#666666'};
  font-weight: bold;
  cursor: pointer;
  padding-left: 5px;
  padding-right: ${({ sorting }) => sorting ? '0' : '5px'};
  border-left: ${({ index }) => index === 0 ? '0' : '1px solid #666666'};
  img {
    height: 5px;
    vertical-align: middle;
    padding: 0 5px;
    transform: ${({ sortDirection }) => sortDirection === 'desc' ? 'rotate(180deg)' : ''};
  }
`

const ItemsWrapper = styled.div`
  max-height: 77vh;
  overflow: auto;
`

const CardList = ({
  columns,
  showHeader,
  data,
  triggerSort,
  sortColumn,
  sortDirection,
  cardComponent,
}) => (
  <div>
    {showHeader && (
      <HeaderWrapper>
        {columns.map((column, index) => (
          <HeaderItem
            key={`list-header-${index}`}
            index={index}
            onClick={() => triggerSort(column)}
            sortDirection={sortDirection}
            sorting={sortColumn === column.key && !!sortDirection}
          >
            {column.title}
            {sortColumn === column.key && !!sortDirection && <img src={SortDirectionIcon} alt="arrow"/>}
          </HeaderItem>
        ))}
      </HeaderWrapper>
    )}
    <ItemsWrapper>
      {data.map((item, index) => cardComponent({ item, index }))}
    </ItemsWrapper>
  </div>
)

export default CardList