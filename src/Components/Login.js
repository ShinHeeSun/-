import React from 'react';
import '../App.css';

class Login extends React.Component {
  state = {
    id:'',
    password: '',
    clicked: false,
    vaildated: false,
  };
  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus()
  };;

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="ID"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          ref={(ref) => (this.input = ref)}
        />
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          ref={(ref) => (this.input = ref)}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default Login;
