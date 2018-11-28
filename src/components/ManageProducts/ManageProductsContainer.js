import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProducts } from '../../actions/productActions';
import { toggleProductWindow } from '../../actions/modalsActions';
import ManageProducts from './ManageProducts';
import Loader from '../lib/Loader';

class ManageProductsContainer extends Component {
  constructor() {
    super();

    this.showSaveForm = this.showSaveForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.productsInfo === this.props.productsInfo) return false;
    return true;
  }

  showSaveForm() {
    this.props.toggleProductWindow('new');
  }

  render() {
    const { products, isLoading } = this.props.productsInfo;
    if (isLoading) return <Loader />;

    return <ManageProducts products={products} showForm={this.showSaveForm} />;
  }
}

const mapStateToProps = state => ({ productsInfo: state.products });

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getProducts()),
  toggleProductWindow: purpose => dispatch(toggleProductWindow(purpose)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    /* null,
    {
      // pure: true,
      areStatePropsEqual: (nextProps, oldProps) => {
        console.log('OLDPROPS', oldProps.productsInfo.products);
        console.log('NEXTPROPS', nextProps.productsInfo.products);
        console.log('equal', oldProps.productsInfo.products === nextProps.productsInfo.products);
        return oldProps.productsInfo.products === nextProps.productsInfo.products;
      },
    }, */
  )(ManageProductsContainer),
);
