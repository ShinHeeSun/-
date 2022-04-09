import React, { Component } from 'react';
import './App.css';
import logo from '../../img/logo.png';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import ItertionSample from './ItertionSample';

class Mainaaa extends Component {
  render() {
    return (
      <div>
        <div className="gray-background">
          <img src={logo} let="logo" alt="..." />{' '}
        </div>
        <ValidationSample />
        <ScrollBox />
        <ItertionSample />
      </div>
    );
  }
}
export default Mainaaa;
