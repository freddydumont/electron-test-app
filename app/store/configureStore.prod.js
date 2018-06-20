// @flow
import { createStore, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(router, sagaMiddleware);

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

sagaMiddleware.run(rootSaga);

export default { configureStore, history };
