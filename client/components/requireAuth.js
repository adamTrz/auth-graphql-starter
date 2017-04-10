import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getUser} from '../queries/user';
import {hashHistory} from 'react-router';

export default WrappedComponent => {
  class ReuireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push('/signIn');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(getUser)(ReuireAuth);
};
