import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import AuthForm from './AuthForm';
import {signIn} from '../mutations/user';
import {getUser} from '../queries/user';
import AuthHOC from './AuthHOC';

class LogIn extends AuthHOC {
  handleSignIn({email, password}) {
    this.props
      .mutate({
        variables: {email, password},
        refetchQueries: [{query: getUser}],
      })
      .catch(e => {
        const errors = e.graphQLErrors.map(error => error.message);
        this.setState({errors});
      });
  }

  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <AuthForm
          onSubmit={this.handleSignIn.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(getUser)(graphql(signIn)(LogIn));
