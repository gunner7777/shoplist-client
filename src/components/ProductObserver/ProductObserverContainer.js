import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductObserver from './ProductObserver';
import { getProducts } from '../../actions/productActions';
import { toggleProductInShoplist } from '../../actions/shoplistActions';

class ProductObserverContainer extends PureComponent {
  constructor() {
    super();
    this.getId = this.getId.bind(this);
  }

  componentDidMount() {
    // temp func
    this.props.fetchData();
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
    // console.log('ididid', id);
    // console.log('choose', this.props.chosenProducts);
    // const chosenProds = this.props.productsIdList;

    if (this.props.chosenProducts.indexOf(id) === -1)
      this.props.toggleProductInShoplist([...this.props.chosenProducts, id]);
    else if (this.props.chosenProducts.indexOf(id) !== -1) {
      const re = this.props.chosenProducts.filter(item => item !== id);
      this.props.toggleProductInShoplist(re);
    }
  }

  render() {
    return (
      <ProductObserver
        productsIdInList={this.props.modalPurpose !== 'new' ? this.props.productsIdList : []}
        allProducts={this.props.products}
        getIdProduct={this.getId}
      />
    );
  }
}

ProductObserverContainer.propTypes = {};

const mapStateToProps = state => ({
  productsIdList: state.shoplist.shoplist.products.map(item => item._id),
  products: state.products,
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
