import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getUser} from '../queries/user';
import {Link} from 'react-router';

class Header extends Component {
  renderButtons() {
    const {user, loading} = this.props.data;
    if (loading)
      return null;
    else if (!user) {
      return (
        <div>
          <li>
            <Link to="/signIn">Sign In</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </div>
      );
    }
    return <Link to="/">Sign Out</Link>;
  }

  render() {
    const {user} = this.props;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(getUser)(Header);
