import React from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default React.createClass ({
  render() {
    return (
      <span className='table'>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Author</TableHeaderColumn>
              <TableHeaderColumn>Reviewer</TableHeaderColumn>
              <TableHeaderColumn>Review</TableHeaderColumn>
              <TableHeaderColumn>Rating</TableHeaderColumn>
              <TableHeaderColumn>Review Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>Gravity Well</TableRowColumn>
              <TableRowColumn>AJ Fitzwater</TableRowColumn>
              <TableRowColumn>Andi</TableRowColumn>
              <TableRowColumn>Really creative use of language.</TableRowColumn>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>29/04/2016</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Bone Length, Wavelength</TableRowColumn>
              <TableRowColumn>Octavia Cade</TableRowColumn>
              <TableRowColumn>Andi</TableRowColumn>
              <TableRowColumn>This was beautifully written</TableRowColumn>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>29/04/2016</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </span>
    )
  }
})
