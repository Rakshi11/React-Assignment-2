import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="registration-form">
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;