// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// actions
import { PRODUCTS_RECEIVED } from '../actions/index';

function products(state = null, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVED:
      return action.payload;
    default:
      return state;
  }
}

function loading(state = true, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVED:
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  router,
  loading,
  products
});

export default rootReducer;
