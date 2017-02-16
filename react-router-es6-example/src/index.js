import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router';
import Home from './home'
import { Stuff, StuffIWant } from './stuff'
import Signup from './Signup'
import GiftGorgeous from './giftgorgeous'
import Login from './Login.js';
import CalendarDay1 from './CalendarDay1.js';
import './index.css';

var destination = document.querySelector("#container");

class App extends Component{
  render() {
    return (
      <div className="topbar">
        <ul className="header">
        <div className="ulli">
          <li> <IndexLink to="/" activeClassName="active"> Home </IndexLink> </li>
          <li> <Link to="/stuff" activeClassName="active"> How it works? </Link> </li>
          <li> <Link to="/giftgorgeous" activeClassName="active"> Gift Gorgeous </Link> </li>
          <li className="Stylisted"><strong><i>Stylisted</i></strong></li>
          <li><Link to="/login" activeClassName="active"><Login/></Link></li>
          <li> <Link to="/signup" activeClassName="active"> <Signup/> </Link> </li>
        </div>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login}>
        <Route path="i-want" component={StuffIWant} />
      </Route>
      <Route path="signup" component={Signup} />
      <Route path="giftgorgeous" component={GiftGorgeous} />
      <Route path="stuff" component={Stuff} />
      <Route path="calendar" component={CalendarDay1} />
    </Route>
  </Router>,
  destination
);
