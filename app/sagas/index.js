import csv from 'csvtojson';
import { call, takeEvery, put } from 'redux-saga/effects';
import { CATEGORIES_REQUESTED, PRODUCTS_REQUESTED } from '../actions/index';

const fs = require('fs');

// paths from root directory
const categories = './app/data/categories.csv';
const products = './app/data/products.csv';

/**
 * Converts a CSV file to JSON asynchronously
 * @param {string} csvPath The path of the file to convert
 * @param {Object} options Option object to be passed to csv function
 */
function convertCSV(csvPath, options) {
  // set encoding to utf16le to avoid artifacts in output
  const stream = fs.createReadStream(csvPath, { encoding: 'utf16le' });
  return csv(options).fromStream(stream);
}

/**
 * Worker Saga responsible for calling the async function and handling errors
 * @param {string} csvPath The path of the file to convert
 * @param {Object} options Option object to be passed to csv function
 * @param {string} type Name of action in uppercase to complete action type
 */
function* convertCSVSaga(csvPath, options, type) {
  try {
    const json = yield call(convertCSV, csvPath, options);
    yield put({ type: `${type}_RECEIVED`, payload: json });
  } catch (error) {
    yield put({ type: `${type}_REQUEST_FAILED`, payload: error });
  }
}

export default function* rootSaga() {
  yield takeEvery(
    CATEGORIES_REQUESTED,
    convertCSVSaga,
    categories,
    { noheader: true, output: 'line' },
    'CATEGORIES'
  );
  yield takeEvery(
    PRODUCTS_REQUESTED,
    convertCSVSaga,
    products,
    { output: 'line' },
    'PRODUCTS'
  );
}
