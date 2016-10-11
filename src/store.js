import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const auth = localStorage.getItem('authenticated') ? JSON.parse(localStorage.getItem('authenticated')) : {};

export default (initialState = {auth}) => {
  let middleware = applyMiddleware(thunk);

  // eslint-disable-next-line
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const store = createStore(rootReducer, initialState, middleware);

  return store;
};
