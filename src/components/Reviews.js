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
      <span className='fifty'>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Author</TableHeaderColumn>
              <TableHeaderColumn>Publication</TableHeaderColumn>
              <TableHeaderColumn>Date Published</TableHeaderColumn>
              <TableHeaderColumn>Average Rating</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>Gravity Well</TableRowColumn>
              <TableRowColumn>AJ Fitzwater</TableRowColumn>
              <TableRowColumn>SciGentasy</TableRowColumn>
              <TableRowColumn>2015</TableRowColumn>
              <TableRowColumn>5</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Bone Length, Wavelength</TableRowColumn>
              <TableRowColumn>Octavia Cade</TableRowColumn>
              <TableRowColumn>Capricious</TableRowColumn>
              <TableRowColumn>2015</TableRowColumn>
              <TableRowColumn>5</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </span>
    )
  }
})
