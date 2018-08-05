import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';
import Home from './home';
import RssFeeds from './rss-feeds';
import logo from '../../../logo.svg';

class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
          <div className="main">
            <Switch>
              <Route path='/rss' component={ RssFeeds } />
              <Route exact path='/' component={ Home } />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;