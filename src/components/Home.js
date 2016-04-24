import React from 'react';
import Feed from './secondlevel/Feed'
import Stories from './Stories'

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../styles/material-theme.js'

class Home extends React.Component {
  constructor() {
      super();
  }

  static childContextTypes = {
      muiTheme: React.PropTypes.object
  };

 // Don't use static in front, I was confused by some error logs
  getChildContext() {
      return {
          muiTheme: ThemeManager.getMuiTheme(Theme)
      }
  }

  render() {
    return (
      <div className="index">
        <Feed />
        <Stories />
      </div>
    );
  }
}

Home.defaultProps = {
};


export default Home;
