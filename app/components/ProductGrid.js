import React from 'react';
import Product from './Product';

class ProductGrid extends React.Component {
  render() {
    let productList = 'Loading...';
    if (!this.props.loading) {
      productList = this.props.products.map(val => (
        <Product key={val[0]} name={val[0]} price={val[1].price} />
      ));
    }
    return <div className="buttons">{productList}</div>;
  }
}

export default ProductGrid;
