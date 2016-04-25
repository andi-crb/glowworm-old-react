import React from 'react';
import ViewRecsFrom from './secondlevel/ViewRecsFrom'
import ViewRecsTo from './secondlevel/ViewRecsTo'

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../styles/material-theme.js'

class Home extends React.Component {
  constructor() {
      super();
  }

  static childContextTypes = {
      muiTheme: React.PropTypes.object
  };

  getChildContext() {
      return {
          muiTheme: ThemeManager.getMuiTheme(Theme)
      }
  }

  render() {
    return (
      <div className="recs">
        <ViewRecsTo />
        <ViewRecsFrom />
      </div>
    );
  }
}

Home.defaultProps = {
};


export default Home;
