import React from 'react';
import logo from '../img/logo.png';
import BlogList from './BlogList'
import Login from './Login'
import Join from './Join'


function Title() {


 

  return (
    <div>
      <div className="black-nav">
        <div>
          <img className="logoName" src={logo} let="logo" alt="..." />
          개발 blog
        </div>
        <Login />
      </div>
      <BlogList />
      <Join />
    </div>
  );
}
export default Title;
