import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../lib/Badge';
import Typography from '../lib/Typography';

const ProductObserver = ({ productsIdInList, allProducts, getIdProduct }) => {
  /* if (allProducts.products.length === 0) {
     // return false;
  } */
  const productsList = allProducts.products.map(item => {
    const checkBool = productsIdInList.indexOf(item._id) !== -1;
    return (
      <Badge key={item._id} productId={item._id} getIdProduct={getIdProduct} Checked={checkBool}>
        <Typography>{item.name}</Typography>
      </Badge>
    );
  });
  return (
    <div>
      <div>{productsList}</div>
    </div>
  );
};
ProductObserver.propTypes = {
  productsIdInList: PropTypes.array,
  allProducts: PropTypes.array,
  getIdProduct: PropTypes.func,
};

export default ProductObserver;
