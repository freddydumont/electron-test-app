// PRODUCTS
export const PRODUCTS_REQUESTED = 'PRODUCTS_REQUESTED';
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED';
export const PRODUCTS_REQUEST_FAILED = 'PRODUCTS_REQUEST_FAILED';

export const requestProducts = () => ({
  type: PRODUCTS_REQUESTED,
  payload: {
    path: './app/data/products.csv',
    output: 'categorized'
  }
});

// ACTIVE CATEGORY
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export function selectCategory(name) {
  return {
    type: SELECT_CATEGORY,
    payload: name
  };
}
