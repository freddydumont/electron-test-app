import { connect } from 'react-redux';
import ProductGrid from '../components/ProductGrid';

const getVisibleProducts = (products, activeCategory, loading) =>
  loading ? null : Object.entries(products[activeCategory]);

const mapStateToProps = state => ({
  products: getVisibleProducts(
    state.products,
    state.activeCategory,
    state.loading
  ),
  loading: state.loading
});

const VisibleProducts = connect(mapStateToProps)(ProductGrid);

export default VisibleProducts;
