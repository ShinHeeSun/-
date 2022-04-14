import React from 'react';
import '../../App.css';
import Aaa from '../../img/쭈꾸미볶음.png';


function Cards() {
  return (
    <div className="row menu">
      <div className="col-xs-6 col-md-3 menuList">
        <a href="#!" className="thumbnail">
          <img src={Aaa} alt="..." width="100%" />
        </a>
        <h5>쭈꾸미볶음</h5>
        <p>10,000원</p>
      </div>
      <div className="col-xs-6 col-md-3 menuList">
        <a href="#!" className="thumbnail">
          <img src={Aaa} alt="..." width="100%" />
        </a>
        <h5>쭈꾸미볶음</h5>
        <p>10,000원</p>
      </div>
      <div className="col-xs-6 col-md-3 menuList">
        <a href="#!" className="thumbnail">
          <img src={Aaa} alt="..." width="100%" />
        </a>
        <h5>쭈꾸미볶음</h5>
        <p>10,000원</p>
      </div>
      <div className="col-xs-6 col-md-3 menuList">
        <a href="#!" className="thumbnail">
          <img src={Aaa} alt="..." width="100%" />
        </a>
        <h5>쭈꾸미볶음</h5>
        <p>10,000원</p>
      </div>
    </div>
  );
}

export default Cards;
