import React from 'react'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default React.createClass ({
  render() {
    return (
      <span className='fifty'>
        <List>
          <ListItem primaryText="Something happened just now!" />
          <ListItem primaryText="Something happened just now!" />
          <ListItem primaryText="Something happened just now!" />
          <ListItem primaryText="Something happened just now!" />
        </List>
      </span>
    )
  }
})
