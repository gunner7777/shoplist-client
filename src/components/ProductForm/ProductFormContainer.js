import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  addProduct,
  clearCurrentProduct,
  updateProduct,
  getProducts,
} from '../../actions/productActions';
import { toggleProductWindow } from '../../actions/modalsActions';
import ProductForm from './ProductForm';

class ProductFormContainer extends PureComponent {
  constructor() {
    super();

    this.saveClick = this.saveClick.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.addAndRefreshProductList = this.addAndRefreshProductList.bind(this);
  }

  addAndRefreshProductList(Product) {
    this.props.addProduct(Product);
    this.props.fetchData();
  }

  closeWindow() {
    this.props.toggleProductWindow('close');
    this.props.clearCurrentProduct();
  }

  saveClick() {
    const Product = {
      name: this.inputName.state.value,
    };

    this.props.modal.purpose === 'new'
      ? this.addAndRefreshProductList(Product)
      : this.props.updateProduct({ ...Product, id: this.props.currProduct._id });

    this.props.toggleProductWindow('close');
  }

  render() {
    console.log('MODAL RENDER >>>');
    const productName =
      JSON.stringify(this.props.currProduct) === '{}' ? '' : this.props.currProduct.name;
    return (
      <ProductForm
        saveProduct={this.saveClick}
        inputRef={el => (this.inputName = el)}
        inputValue={productName}
        closeWindow={this.closeWindow}
        show={this.props.modal.isShowProductForm}
      />
    );
  }
}

const mapStateToProps = state => ({
  currProduct: state.products.currentProduct,
  modal: state.modals,
});

const mapDispatchToProps = dispatch => ({
  addProduct: data => dispatch(addProduct(data)),
  toggleProductWindow: purpose => dispatch(toggleProductWindow(purpose)),
  clearCurrentProduct: () => dispatch(clearCurrentProduct()),
  updateProduct: data => dispatch(updateProduct(data)),
  fetchData: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductFormContainer);
