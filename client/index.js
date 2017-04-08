import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

/*
since we use cookies to store user data in our app, we have to let know apollo about that fact
lets create NetworkInterface and then pass it to ApolloClient's options:
*/
const networkInterface = createNetworkInterface({
  uri: '/graphql', //endpoint, (defined at server.js)
  opts: {
    credentials: 'same-origin',
  },
});

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
