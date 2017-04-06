import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getUser} from '../queries/user';
import {Link} from 'react-router';
import {signOut} from '../mutations/user';

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
    return (
      <li>
        <a onClick={this.handleLogOut.bind(this)}>
          Sign Out
        </a>
      </li>
    );
  }

  handleLogOut() {
    this.props.mutate({
      refetchQueries: [{query: getUser}],
    });
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

export default graphql(signOut)(graphql(getUser)(Header));
