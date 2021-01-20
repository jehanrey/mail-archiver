import React from 'react'
import styled from 'styled-components'

import { SortDirectionIcon } from 'icons'
import ExpandingRow from './expanding-row'

const TableWrapper = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  thead > tr {
    height: 40px;
    background: #F5F5F5;
    text-align: left;
    color: #666666;
  }

  th, td {
    padding: 0 10px 0 10px;
  }
`

const ColumnHeader = styled.th`
  width: ${({ width }) => width || undefined};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  img {
    height: 5px;
    vertical-align: middle;
    padding: 0 5px;
    transform: ${({ sortDirection }) => sortDirection === 'desc' ? 'rotate(180deg)' : ''};
  }
`

const Headers = ({
  columns,
  triggerSort,
  sortColumn,
  sortDirection,
}) => (
  <tr>
    {columns.map((column, index) => (
      <ColumnHeader
        key={`table-header-${index}`}
        width={column.width}
        onClick={() => triggerSort(column)}
        sortDirection={sortDirection}
      >
        {column.title}
        {sortColumn === column.key && !!sortDirection && <img src={SortDirectionIcon} alt="arrow"/>}
      </ColumnHeader>
    ))}
  </tr>
)

const Rows = ({
  columns,
  data,
  expandedContentKey,
}) => data.map((row, index) => (
  <ExpandingRow
    key={`row-item-${index}`}
    expandedContentKey={expandedContentKey}
    columns={columns}
    rowData={row}
  />
))

const ExpandingTable = ({
  columns,
  data,
  triggerSort,
  sortColumn,
  sortDirection,
  expandedContentKey,
}) => (
  <TableWrapper>
    <thead>
      <Headers
        columns={columns}
        triggerSort={triggerSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
    </thead>
    <tbody>
      <Rows
        columns={columns}
        data={data}
        expandedContentKey={expandedContentKey}
      />
    </tbody>
  </TableWrapper>
)

export default ExpandingTable