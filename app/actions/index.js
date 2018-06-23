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

export const selectCategory = name => ({
  type: SELECT_CATEGORY,
  payload: name
});

// PRODUCT SELECTION
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (name, price) => ({
  type: ADD_PRODUCT,
  payload: { name, price }
});

// RESET
export const RESET_INVOICE = 'RESET_INVOICE';

export const resetInvoice = () => ({
  type: RESET_INVOICE
});
