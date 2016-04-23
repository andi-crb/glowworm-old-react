import React from 'react';
import Header from './Header'
import Menu from './Menu'
import Feed from './Feed'
import Stories from './Stories'
import AddReview from './AddReview'

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../styles/material-theme.js'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

class AppComponent extends React.Component {
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
        <Menu />
        <Header />
        <Feed />
        <Stories />
        <AddReview />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
