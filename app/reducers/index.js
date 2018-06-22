// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// actions
import {
  PRODUCTS_RECEIVED,
  SELECT_CATEGORY,
  ADD_PRODUCT
} from '../actions/index';

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

function activeCategory(state = null, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVED:
      return Object.keys(action.payload)[0];
    case SELECT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

function items(state = {}, { type, payload }) {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [payload.name]: {
          price: payload.price,
          // if product is already present, increment quantity
          quantity: state[payload.name] ? state[payload.name].quantity + 1 : 1
        }
      };
    default:
      return state;
  }
}

const invoice = combineReducers({
  items
});

const rootReducer = combineReducers({
  router,
  loading,
  products,
  activeCategory,
  invoice
});

export default rootReducer;
