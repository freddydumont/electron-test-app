import React from 'react';
import Product from './Product';

class ProductGrid extends React.Component {
  render() {
    const { loading, products, addProduct } = this.props;
    let productList = 'Loading...';
    if (!loading) {
      productList = products.map(val => (
        <Product
          key={val[0]}
          name={val[0]}
          price={val[1].price}
          addProduct={addProduct}
        />
      ));
    }
    return <div className="buttons">{productList}</div>;
  }
}

export default ProductGrid;
