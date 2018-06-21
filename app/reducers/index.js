// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// actions
import { PRODUCTS_RECEIVED, CATEGORIES_ROUTIFIED } from '../actions/index';

function products(state = null, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVED:
      return action.payload;
    default:
      return state;
  }
}

function routes(state = null, action) {
  switch (action.type) {
    case CATEGORIES_ROUTIFIED:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  router,
  routes,
  products
});

export default rootReducer;
