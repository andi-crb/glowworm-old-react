import React from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Popover from 'material-ui/lib/popover/popover';
import TextField from 'material-ui/lib/text-field';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../styles/material-theme.js'

export default React.createClass ({
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme),
    };
  },


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
            <Popover>

              <TextField hintText="username" />
              <TextField hintText="password" />
              <RaisedButton label="Login" secondary={true} />
            </Popover>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
})
