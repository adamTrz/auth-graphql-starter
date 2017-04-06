import React, {Component} from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.onSubmit({email, password});
  }
  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-field">
            <input
              required
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className="input-field">
            <input
              required
              type="password"
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
            />
          </div>
          <button className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
