import React from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <div className="col-md-4">
      <img src={'./shoes' + (props.i + 1) + '.jpg'} alt="" width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <button className="btn btn-primary">더보기</button>
    </div>
  );
}

export default Cards;
