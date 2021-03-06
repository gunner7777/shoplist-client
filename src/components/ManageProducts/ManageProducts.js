import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AddButton } from '../lib/Button';
import ProductCardContainer from '../ProductCard/ProductCardContainer';
import './ProductManager.scss';

class ManageProducts extends PureComponent {
  render() {
    const { products, showForm } = this.props;
    const productsList = products.map(item => <ProductCardContainer {...item} key={item._id} />);

    return (
      <div className="ProductManager">
        <AddButton mod="Button_FullWidth" addItem={showForm} />
        {productsList}
      </div>
    );
  }
}

ManageProducts.propTypes = {
  showForm: PropTypes.func,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string,
    }),
  ),
};

export default ManageProducts;
