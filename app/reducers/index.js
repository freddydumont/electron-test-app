// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// actions
import { PRODUCTS_RECEIVED, CATEGORIES_RECEIVED } from '../actions/index';

function categories(state = null, action) {
  switch (action.type) {
    case CATEGORIES_RECEIVED:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}

function products(state = null, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVED:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  router,
  categories,
  products
});

export default rootReducer;
