import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Route, IndexRoute } from 'react-router';
import { isAuthenticated } from './Auth/selectors';
import configureStore from './store';
import './index.css';

const store = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

// Components
import App from './App';
import PageNotFound from './404';
import SignIn from './Auth/components/SignIn';
import Dashboard from './Dashboard';

const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace({
        pathname: '/sign-in'
      });
    }
  }
}

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace({
        pathname: '/dashboard'
      });
    }
  }
}

store.subscribe(() => {
  localStorage.setItem('authenticated', JSON.stringify(store.getState().auth));
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncedHistory}>
      <Route path="/">
        <IndexRoute component={App} />
        <Route path="sign-in" component={SignIn} onEnter={requireUnauth(store.getState)} />
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth(store.getState)} />
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
