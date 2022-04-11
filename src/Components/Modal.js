import React from 'react';
import '../App.css';

function Modal (props) {
  return (
    <div className="Modal">
      <h2>{props.titleList[props.only].title}</h2>
      <p>{props.titleList[props.only].text}</p>
      <p>상세내용</p>
    </div>
  );
}
export default Modal;
