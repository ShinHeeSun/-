import React from 'react';
import { Link } from 'react-router-dom';

function Cards(props) {

  return (
    <div className="col-md-4">
        
     <Link to={"/CardMore/" + props.shoes.id}> <img src={'./shoes' + (props.i) + '.jpg'} alt="" width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      </Link>

    </div>
  );
}

export default Cards;
