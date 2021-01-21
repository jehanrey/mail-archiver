import React, {
  useState,
  useEffect,
} from 'react'
import styled from 'styled-components'

const TableRow = styled.tr`
  cursor: ${({ expands }) => expands ? 'pointer' : 'default'};
  border-bottom: ${({ expanded }) => expanded ? 'none' : '1px solid #DEDEDE'};
  height: 40px;
  color: #333333;
  ${({ expanded }) => expanded && `
    background: #F5F8FA;
    color: #0E28E6;
  `}

  &:hover {
    background: #F5F8FA;
    color: #0E28E6;
  }
`

const RowItem = styled.td`
  width: ${({ width }) => width || undefined};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Content = styled.tr`
  visibility: ${({ expanded }) => expanded ? 'visible' : 'hidden'};
  opacity: ${({ expanded }) => expanded ? '1' : '0'};
  max-height: ${({ expanded }) => expanded ? '100vh' : '0'};
  border-bottom: ${({ expanded }) => expanded ? '1px solid #DEDEDE' : '0'};
  transition: height 0.3s linear,line-height 0.3s linear, opacity 0.5s linear;
  color: #666666;

  td {
    line-height: ${({ expanded }) => expanded ? 'normal' : '0'};
    visibility: ${({ expanded }) => expanded ? 'visible' : 'hidden'};
    padding: ${({ expanded }) => expanded && '15px 10px !important'};
    white-space: pre;
  }
`

const ExpandingRow = ({
  expandedContentKey,
  columns,
  rowData,
  sortColumn,
  sortDirection,
}) => {
  const [expanded, setExpanded] = useState(false)
  const expands = !!expandedContentKey

  useEffect(() => {
    setExpanded(false)
  }, [rowData, sortColumn, sortDirection])

  const toggleExpand = () => expands && setExpanded((prevState) => !prevState)

  return (
    <>
      <TableRow
        onClick={toggleExpand}
        expanded={expanded}
        expands={expands}
      >
        {columns.map((column, index) => (
          <RowItem
            key={`table-data-${index}`}
            width={column.width}
          >
            {column.render(rowData)}
          </RowItem>
        ))}
      </TableRow>
      {expands && (
        <Content expanded={expanded}>
          <td colSpan={columns.length}>
            {rowData[expandedContentKey]}
          </td>
        </Content>
      )}
    </>
  )
}

export default ExpandingRow