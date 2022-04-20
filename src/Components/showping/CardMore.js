import React,{useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';


function CardMore(props) {
  let [ alert, alert변경 ] = useState(true);
  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);
  
    return ()=>{ clearTimeout(타이머) }
  }, []);
  const  { id } = useParams();
  const history = useHistory();
  let findShoes = props.shoes.find(function(shoes){ 
    return shoes.id == id 
  });

  return (
    <div>
       {
      alert === true
      ? (<div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>)
      : null
    }
      <div className="row">
        <div className="col-md-6">
          <img src={'../shoes' +(id) +'.jpg' } width="100%" alt='..' />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          <button
            className="btn btn-danger"
         
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
          onClick={()=> {
            history.goBack();
          }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardMore;