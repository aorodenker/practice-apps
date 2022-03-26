import React from 'react';


class UserForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      userStorage: []
    };
    this.stateUpdate = this.stateUpdate.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  //update state
  stateUpdate(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  //save user info
  saveUser(e) {
    e.preventDefault();
    var userObject = [
      this.state.name,
      this.state.email,
      this.state.username,
      this.state.password
    ]
    this.setState({
      name: '',
      email: '',
      username: '',
      password: '',
      userStorage: userObject
    });
    this.props.storeUser(userObject);
    this.props.nextHandler();
  }

  render() {
    return (
      <div>
        <h3>Create an Account</h3>
        <form
          className="user-form"
          onSubmit={this.saveUser}
        >
          <input
            name="name"
            value={this.state.name}
            placeholder="Full name"
            onChange={this.stateUpdate}
          ></input>
          <input
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.stateUpdate}
          ></input>
          <input
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChange={this.stateUpdate}
          ></input>
          <input
             name="password"
             value={this.state.password}
             placeholder="Password"
             onChange={this.stateUpdate}
          ></input>
           <button
           >Next</button>
        </form>
      </div>
    )
  }
}


export default UserForm;