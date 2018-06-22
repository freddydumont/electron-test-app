import React from 'react';
import { Button } from 'bloomer';
import accounting from 'accounting-js';

const Product = ({ name, price }) => (
  <Button
    isSize="medium"
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
