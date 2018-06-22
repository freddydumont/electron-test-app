import { call, takeEvery, put } from 'redux-saga/effects';
import parser from '../lib/parser';
import { PRODUCTS_REQUESTED } from '../actions/index';

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
}
