import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();
// Render the main component into the dom
ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Router routes={routes} history={browserHistory}/>, document.getElementById('app'));
