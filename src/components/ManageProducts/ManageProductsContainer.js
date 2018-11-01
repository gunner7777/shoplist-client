import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProducts } from '../../actions/productActions';
import { toggleProductWindow } from '../../actions/modalsActions';
import ManageProducts from './ManageProducts';
import Loader from '../lib/Loader';

class ManageProductsContainer extends PureComponent {
  constructor() {
    super();

    this.showSaveForm = this.showSaveForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  showSaveForm() {
    this.props.toggleProductWindow('new');
  }

  render() {
    if (this.props.products.isLoading) return <Loader />;

    return <ManageProducts {...this.props.products} showForm={this.showSaveForm} />;
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getProducts()),
  toggleProductWindow: purpose => dispatch(toggleProductWindow(purpose)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ManageProductsContainer),
);
