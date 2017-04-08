import React from 'react';
import {graphql} from 'react-apollo';
import AuthForm from './AuthForm';
import {signUp} from '../mutations/user';
import {getUser} from '../queries/user';
import AuthHOC from './AuthHOC';

class SignUp extends AuthHOC {
  handleSignUp({email, password}) {
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
        <h3>Sign Up</h3>
        <AuthForm
          onSubmit={this.handleSignUp.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(getUser)(graphql(signUp)(SignUp));
