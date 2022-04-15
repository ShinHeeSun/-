import React, { useState } from 'react';
import '../App.css';
import Data from './showping/Data';
import Navbar from './showping/Navbar';
import Card from './showping/Cards';
import CardMore from './showping/CardMore';
import Login from '../Components/showping/Login';
import Join from '../Components/showping/Join';
import { Link, Route, Switch } from 'react-router-dom';

function Show() {
  const [shoes, setShoes] = useState(Data);
  return (
    <>
      <Navbar />

      <Route exact path="/Menu">
        <Card />
      </Route>

      <Route exact path="/Menu/:id">
        <CardMore shoes={shoes} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Join">
        <Join />
      </Route>
    </>
  );
}
export default Show;
