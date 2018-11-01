import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductCard from './ProductCard';
import { deleteProduct, getProduct } from '../../actions/productActions';
import { toggleProductWindow } from '../../actions/modalsActions';

class ProductCardContainer extends PureComponent {
  constructor() {
    super();
    this.deleteClick = this.deleteClick.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  deleteClick(e) {
    this.props.deleteProduct(e.currentTarget.parentNode.dataset.productid);
  }

  showForm(e) {
    this.props.getProduct(e.currentTarget.parentNode.dataset.productid);
    this.props.toggleProductWindow('edit');
  }

  render() {
    return (
      <ProductCard {...this.props} deleteProduct={this.deleteClick} formProduct={this.showForm} />
    );
  }
}

ProductCardContainer.propTypes = {};

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => dispatch(deleteProduct(id)),
  getProduct: id => dispatch(getProduct(id)),
  toggleProductWindow: purpose => dispatch(toggleProductWindow(purpose)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(ProductCardContainer),
);
