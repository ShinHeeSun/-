import React from 'react';
import './App.css';
import logo from './img/logo.png';
import Customer from './Components/Customer';

const customers = [
  {
    id: '1',
    image: 'http://placeimg.com/64/64/1' /* 랜덤으로 이미지 변경 해주는 주소 */,
    name: '신희선',
    birthday: '930929',
    gender: '남자',
    job: '직장인',
  },
  {
    id: '2',
    image: 'http://placeimg.com/64/64/2' /* 랜덤으로 이미지 변경 해주는 주소 */,
    name: '신희선',
    birthday: '930929',
    gender: '여자',
    job: '직장인',
  },
  {
    id: '3',
    image: 'http://placeimg.com/64/64/3' /* 랜덤으로 이미지 변경 해주는 주소 */,
    name: '신희희',
    birthday: '930929',
    gender: '남자',
    job: '직장인',
  },
];

function App() {
  return (
    <div>
      <div className="gray-background">
        <img src={logo} let="logo" alt="..." />{' '}
      </div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}
export default App;
