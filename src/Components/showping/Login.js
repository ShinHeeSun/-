import React, { useState } from 'react';
import logo from '../../img/logo.png'
import axios from 'axios';

function Login1() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [vaildated, setVildated] = useState(false);

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const onClick = () => {
    axios.get('http://localhost:3001/user').then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className='login'>
      <img src={logo} alt=""  />
      <input onChange={onChangeId} type="text" placeholder="Id"
      style={{marginTop:'20px'}}></input>
      <br />
      <input
        onChange={onChangePassword}
        type="password"
        placeholder="password"
        style={{marginTop:'20px'}}
      ></input> <br />
      <button onClick={onClick}
      style={{marginTop:'20px'}}>로그인</button>
    </div>
  );
}
export default Login1;
