import React, { useState } from 'react';

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
    <>
      <input onChange={onChangeId} type="text" placeholder="Id"></input>
      <input
        onChange={onChangePassword}
        type="password"
        placeholder="password"
      ></input>
      <button onClick={onClick}>qjxms</button>
    </>
  );
}
export default Login1;
