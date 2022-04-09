import React, { useState } from 'react';
import logo from '../img/logo.png';
import Modal from './Modal';

function Title() {
  let [title, setTitle] = useState([
    '남자코트 추천',
    '강남 우동 맛집',
    '리액트 독학',
  ]);

  let [like, setLike] = useState(0);

  let [modal, setModal] = useState(false);

  const openModal = () => {
    if (modal === false) {
      return setModal(true);
    } else if (modal === true) {
      return setModal(false);
    }
  };

  const likeClike = () => {
    setLike(like + 1);
  };

  return (
    <div>
      <div className="black-nav">
        <div>
          <img className="logoName" src={logo} let="logo" alt="..." />
          개발 blog
        </div>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span onClick={likeClike}>👍{like}</span>
        </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>
          {title[1]}
          <span onClick={likeClike}>👍{like}</span>
        </h4>
        <p>3월 17일 발행</p>
        <hr />
      </div>
      <div className="list" onClick={openModal}>
        <h4>
          {title[2]}
          <span onClick={likeClike}>👍{like}</span>
        </h4>
        <p>2월 11일 발행</p>
        <hr />
      </div>

      {modal === true ? <Modal /> : null}
    </div>
  );
}
export default Title;
