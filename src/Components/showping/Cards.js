/* eslint-disable */

import React, { useState } from 'react';
import Data from './Data';
import CardMenu from './CardMenu';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cards() {
  const [shoes, setShoes] = useState(Data);

  return (
    <>
    
      <div className="container">
      <button className="btn btn-primary"><Link to='/Card/New'>상품 등록하기</Link></button>
        <div className="row">
          {shoes.map((a, i) => {
            return <CardMenu shoes={shoes[i]} i={i} key={i} />;
          })}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            axios
              .get('http://localhost:3001/db')
              .then((result) => {
                setShoes([...shoes, ...result.data]);
                
              })
              .catch(() => {});
              console.log(shoes)
          }}
        >
          더보기
        </button>
      </div>
    </>
  );
}

export default Cards;
