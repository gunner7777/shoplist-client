import React from 'react';
import PropTypes from 'prop-types';
import { AddButton } from '../lib/Button';
import ProductCardContainer from '../ProductCard/ProductCardContainer';

import './ProductManager.scss';

const ManageProducts = ({ products, showForm }) => {
  const productsList = products.map(item => <ProductCardContainer {...item} key={item._id} />);

  return (
    <div className="ProductManager">
      <AddButton mod="Button_FullWidth" addItem={showForm} />
      {productsList}
    </div>
  );
};

ManageProducts.propTypes = {
  showForm: PropTypes.func,
  products: PropTypes.array,
};

export default ManageProducts;
