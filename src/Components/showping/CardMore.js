import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import shoes1 from '../../img/shoes1.jpg';

function CardMore(props) {
  const { id } = useParams();
  const history = useHistory();
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img src={shoes1} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[0].title}</h4>
          <p>{props.shoes[0].content}</p>
          <p>{props.shoes[0].price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardMore;
