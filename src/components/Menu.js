import React from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

export default React.createClass ({
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true} float="left">
            <DropDownMenu value={1}>
              <MenuItem value={1} primaryText="Home" />
              <MenuItem value={2} primaryText="Latest Stories" />
              <MenuItem value={3} primaryText="My Reviews" />
              <MenuItem value={4} primaryText="Random Story" />
              <MenuItem value={5} primaryText="My Recommendations" />
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup float="right">
            <RaisedButton label="Login" secondary={true} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
})
