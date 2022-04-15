/* eslint-disable */

import React, { useState } from 'react';
import Data from './Data';
import CardMenu from './CardMenu';

function Cards() {
  const [shoes, setShoes] = useState(Data);

  return (
    <>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <CardMenu shoes={shoes[i]} i={i} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
