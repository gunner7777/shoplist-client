import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from '../lib/Badge';
import Typography from '../lib/Typography';

class ProductObserver extends Component {
  render() {
    const { productsIdInList, allProducts, getIdProduct } = this.props;
    const productsList = allProducts.map(item => {
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
  }
}

ProductObserver.propTypes = {
  productsIdInList: PropTypes.arrayOf(PropTypes.string),
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  getIdProduct: PropTypes.func,
};

export default ProductObserver;
