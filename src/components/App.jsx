import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, browserHistory } from 'react-router-dom';
import Home from './Home.jsx';
import ClientTimes from './ClientTimes/ClientTimes.jsx';
import SlackConfig from './Slack/SlackConfig.jsx';
import '../scripts/js/main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page--wrapper">
          <div className="page--head nav">
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/times'}>Client Times</Link></li>
              <li><Link to={'/slack'}>Slack Config</Link></li>
            </ul>
          </div>
          <hr />
          <div className="page--body">
            <Route exact path='/' component={Home} />
            <Route path='/times' component={ClientTimes} />
            <Route path='/slack' component={SlackConfig} />
          </div>
          <div className="page--foot">
            <div className="text-center">&copy; NetConstruct <span className="js-footer-date"></span> Support Desk Team</div>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}