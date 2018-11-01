import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductObserver from './ProductObserver';
import { getProducts } from '../../actions/productActions';

class ProductObserverContainer extends PureComponent {
  constructor() {
    super();

    this.state = {
      productsId: [],
    };

    // this.saveProductsList = this.saveProductsList.bind(this);
    this.getId = this.getId.bind(this);
  }

  componentDidMount() {
    // temp func
    this.props.fetchData();

    this.setState({
      productsId: this.props.productsIdList,
    });
  }

  componentWillUnmount() {
    this.props.getCheckedId(this.state.productsId);
    console.log('unmount');
  }

  getId({ id, bool }) {
    if (bool) {
      if (this.state.productsId.indexOf(id) === -1)
        this.setState({ productsId: [...this.state.productsId, id] });
    } else if (this.state.productsId.indexOf(id) !== -1) {
      const updatedList = this.state.productsId.filter(item => {
        if (item !== id) return item;
      });

      this.setState({
        productsId: updatedList,
      });
    }
  }

  /* saveProductsList() {
    console.log('all id', this.state.productsId);
  } */

  render() {
    return (
      <ProductObserver
        // saveProducts={this.saveProductsList}
        productsIdInList={this.props.modalPurpose === 'new' ? [] : this.props.productsIdList}
        getIdProduct={this.getId}
        allProducts={this.props.products}
      />
    );
  }
}

// ProductObserverContainer.propTypes = {};

const mapStateToProps = state => ({
  productsIdList: state.shoplist.shoplist.products.map(item => item._id),
  products: state.products,
  modalPurpose: state.modals.purpose,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductObserverContainer);
