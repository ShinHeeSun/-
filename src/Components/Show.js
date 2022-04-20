import React, { useState } from 'react';
import '../App.css';
import Data from './showping/Data';
import Navbar from './showping/Navbar';
import Cards from './showping/Cards';
import CardMore from './showping/CardMore';
import Login from '../Components/showping/Login';
import Join from '../Components/showping/Join';
import { Route } from 'react-router-dom';
import NewCard from './showping/NewCard'
function Show() {
  const [shoes, setShoes] = useState(Data);
  return (
    <>
      <Navbar />

      <Route exact path="/Cards">
        <Cards />
      </Route>

      <Route exact path="/CardMore/:id">
        <CardMore shoes={shoes} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Join">
        <Join />
      </Route>
      <Route exact path='/Card/New'>
      <NewCard />
      </Route>
    </>
  );
}
export default Show;
