import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductObserver from './ProductObserver';
import { getProducts } from '../../actions/productActions';
import { toggleProductInShoplist } from '../../actions/shoplistActions';
import { productsIdListSelector } from './ProductObserverSelectors';

class ProductObserverContainer extends Component {
  constructor() {
    super();
    this.getId = this.getId.bind(this);
  }

  componentDidMount() {
    if (this.props.products.length === 0) this.props.fetchData();
    this.props.toggleProductInShoplist(
      this.props.modalPurpose !== 'new' ? this.props.productsIdList : [],
    );
  }

  getId(id) {
    // есть список выбр продуктов
    // берем его, сравниваем с выбранным ИД
    // если нет добавляем
    // если есть то убираем
    // полученный массив отправляем в хранилище

    // Если нет в списке - добавляем
    if (this.props.chosenProducts.indexOf(id) === -1)
      this.props.toggleProductInShoplist([...this.props.chosenProducts, id]);
    // Такой уже есть, убираем его из списка
    else if (this.props.chosenProducts.indexOf(id) !== -1) {
      const updatedList = this.props.chosenProducts.filter(item => item !== id);
      this.props.toggleProductInShoplist(updatedList);
    }
  }

  render() {
    console.log('dfdf', this.props.productsIdList);
    return (
      <ProductObserver
        productsIdInList={this.props.modalPurpose !== 'new' ? this.props.productsIdList : []}
        allProducts={this.props.products}
        getIdProduct={this.getId}
      />
    );
  }
}

ProductObserverContainer.propTypes = {
  productsIdList: PropTypes.arrayOf(PropTypes.string),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  modalPurpose: PropTypes.string,
  chosenProducts: PropTypes.arrayOf(PropTypes.string),
  fetchData: PropTypes.func,
  toggleProductInShoplist: PropTypes.func,
};

const mapStateToProps = state => ({
  productsIdList: productsIdListSelector(state),
  products: state.products.products,
  modalPurpose: state.modals.purpose,
  chosenProducts: state.shoplist.chosenProducts,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getProducts()),
  toggleProductInShoplist: prods => dispatch(toggleProductInShoplist(prods)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductObserverContainer);
