import React, {Component} from 'react';
import {hashHistory} from 'react-router';

class AuthHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {errors: []};
  }
  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }
  render() {
    return this.props.children;
  }
}

export default AuthHOC;
