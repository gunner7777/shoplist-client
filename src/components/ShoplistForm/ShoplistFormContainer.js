import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addShoplist, updateShoplist, cleanChosenProducts } from '../../actions/shoplistActions';
import { toggleShoplistWindow } from '../../actions/modalsActions';
import ShoplistForm from './ShoplistForm';

class ShoplistFormContainer extends Component {
  constructor() {
    super();

    this.saveShoplist = this.saveShoplist.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  shouldComponentUpdate(props) {
    if (props.productName === this.props.productName) return false;
    return true;
  }

  saveShoplist() {
    // work when delete from DOM
    // this.props.history.push('/products');
    // console.log('name 1', this.inputName.state.value);
    // this.ShoplistName = this.getShoplistName().name;
    // console.log('name', this.ShoplistName);
    const Shoplist = {
      products: this.props.chosenProducts,
      name: this.inputName.state.value,
    };

    if (this.props.modal.purpose === 'new') {
      this.props.addShoplist(Shoplist);
    } else if (this.props.modal.purpose === 'update') {
      this.props.updateShoplist({ ...Shoplist, id: this.props.shoplistId });
    }
    this.props.toggleShoplistWindow('close');
  }

  closeWindow() {
    this.props.toggleShoplistWindow('close');
    this.props.cleanChosenProducts();
  }

  render() {
    console.log('render from');
    return (
      <ShoplistForm
        closeWindow={this.closeWindow}
        getCheckedId={this.getCheckedId}
        saveShoplist={this.saveShoplist}
        inputRef={el => (this.inputName = el)}
        inputValue={this.props.modal.purpose === 'new' ? '' : this.props.productName}
        show={this.props.modal.isShowShoplistForm}
      />
    );
  }
}

// ShoplistFormContainer.propTypes = {};

const mapStateToProps = state => ({
  modal: state.modals,
  productName: state.shoplist.shoplist.name,
  shoplistId: state.shoplist.shoplist._id,
  chosenProducts: state.shoplist.chosenProducts,
});

const mapDispatchToProps = dispatch => ({
  addShoplist: data => dispatch(addShoplist(data)),
  updateShoplist: data => dispatch(updateShoplist(data)),
  toggleShoplistWindow: purpose => dispatch(toggleShoplistWindow(purpose)),
  cleanChosenProducts: () => dispatch(cleanChosenProducts()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ShoplistFormContainer),
);
