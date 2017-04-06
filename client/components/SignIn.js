import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import AuthForm from './AuthForm';
import {signIn} from '../mutations/user';
import {getUser} from '../queries/user';

class LogIn extends Component {
  handleSignIn({email, password}) {
    this.props.mutate({
      variables: {email, password},
      refetchQueries: [{query: getUser}],
    });
  }

  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <AuthForm onSubmit={this.handleSignIn.bind(this)} />
      </div>
    );
  }
}

export default graphql(signIn)(LogIn);
