import React from 'react';
import { Button } from 'bloomer';
import accounting from 'accounting-js';

const Product = ({ name, price, addProduct }) => (
  <Button
    onClick={() => addProduct(name, price)}
    render={props => (
      <div {...props}>
        <p>{name}</p>
        <div className="is-divider-vertical" data-content="PRICE:" />
        <p>{accounting.formatMoney(price)}</p>
      </div>
    )}
  />
);

export default Product;
