import React from 'react'
import ReactDOM from 'react-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

ReactDOM.render(
  <BootstrapTable data={window.props.products} striped hover>
    <TableHeaderColumn isKey dataField="id">
      Product ID
    </TableHeaderColumn>
    <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
    <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
  window.react_mount
)
