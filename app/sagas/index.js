import { call, takeEvery, put } from 'redux-saga/effects';
import parser from '../lib/parser';
import {
  PRODUCTS_REQUESTED,
  PRODUCTS_RECEIVED,
  CATEGORIES_ROUTIFIED
} from '../actions/index';

/**
 * Worker Saga turning product categories strings into route strings.
 * Takes in a payload object and returns an action with the result
 */
function* routify({ payload }) {
  const categories = Object.keys(payload);
  const routes = categories.map(val =>
    val
      .normalize('NFD')
      .replace(/[\u0300-\u036f]|[^A-Za-z0-9_\s]/g, '')
      .replace(/\s/g, '-')
      .toLowerCase()
  );
  yield put({ type: CATEGORIES_ROUTIFIED, payload: routes });
}

/**
 * Worker Saga responsible for calling the parser and handling errors
 * @param {string} actionType Uppercase action identifier
 * @param {Object} action Destructured action object passed by redux-saga
 */
function* parseCsv(actionType, { payload: { path, output } }) {
  try {
    const data = yield call(parser, path, output);
    yield put({ type: `${actionType}_RECEIVED`, payload: data });
  } catch (error) {
    console.error(error);
    yield put({ type: `${actionType}_REQUEST_FAILED`, payload: error });
  }
}

export default function* rootSaga() {
  yield takeEvery(PRODUCTS_REQUESTED, parseCsv, 'PRODUCTS');
  yield takeEvery(PRODUCTS_RECEIVED, routify);
}
