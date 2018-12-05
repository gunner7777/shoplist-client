import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from '../lib/Badge';
import Typography from '../lib/Typography';

class ProductObserver extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.productsIdInList === this.props.productsIdInList) return false;
    return true;
  }

  render() {
    console.log('render');
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
/*
const ProductObserver = ({ productsIdInList, allProducts, getIdProduct }) => {
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
};
*/

ProductObserver.propTypes = {
  productsIdInList: PropTypes.array,
  allProducts: PropTypes.array,
  getIdProduct: PropTypes.func,
};

export default ProductObserver;
