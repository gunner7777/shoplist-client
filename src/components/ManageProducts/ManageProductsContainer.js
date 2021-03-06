import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    if (isLoading)
      return (
        <div className="text-center">
          <Loader />
        </div>
      );

    return <ManageProducts products={products} showForm={this.showSaveForm} />;
  }
}

ManageProductsContainer.propTypes = {
  fetchData: PropTypes.func,
  toggleProductWindow: PropTypes.func,
  productsInfo: PropTypes.shape({
    isLoading: PropTypes.bool,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        _id: PropTypes.string,
      }),
    ),
  }),
};

const mapStateToProps = state => ({ productsInfo: state.products });

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
