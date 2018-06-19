// @flow
import { createStore, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(router);

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
