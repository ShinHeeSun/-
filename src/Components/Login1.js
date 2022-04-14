import React, { useState } from 'react';
import { Flag } from 'semantic-ui-react';

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
      
  }
  return (
    <>
      <input onChange={onChangeId} type="text" placeholder="Id"></input>
      <input
        onChange={onChangePassword}
        type="password"
        placeholder="password"
      ></input>
      <button></button>
    </>
  );
}
export default Login1;
