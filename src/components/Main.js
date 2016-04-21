require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header'
import Menu from './Menu'
import Feed from './Feed'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Menu />
        <Header />
        <Feed />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
