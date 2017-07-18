import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  submitHandler = event => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      console.log(this.state.username, this.state.password)
      //this.props.onSubmit(this.state.username, this.state.password)
    }
  }

  updateUsername = e => this.setState({username: e.target.value})
  updatePassword = e => this.setState({password: e.target.value})

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.updateUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.updatePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
