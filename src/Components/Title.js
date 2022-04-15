import React from 'react';
import logo from '../img/logo.png';
import BlogList from './BlogList';
import Login1 from './Login';
import Join from './Join';
import { Link, Route, Switch } from 'react-router-dom';

function Title() {
  return (
    <div>
      <div className="black-nav">
        <div>
          <img className="logoName" src={logo} let="logo" alt="..." />
          개발 blog
        </div>
        <Route exact path="/login">
          <Login1 />
        </Route>
      </div>
      <Route exact path="/List">
        <BlogList />
      </Route>
      <Route exact path="/join">
        <Join />
      </Route>
    </div>
  );
}
export default Title;
