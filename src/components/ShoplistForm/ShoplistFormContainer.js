import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addShoplist, updateShoplist } from '../../actions/shoplistActions';
import { toggleShoplistWindow } from '../../actions/modalsActions';
import ShoplistForm from './ShoplistForm';

class ShoplistFormContainer extends PureComponent {
  constructor() {
    super();

    this.saveShoplist = this.saveShoplist.bind(this);
    this.getCheckedId = this.getCheckedId.bind(this);
    this.getShoplistName = this.getShoplistName.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    let ShoplistName;
  }

  getCheckedId(prods) {
    const Shoplist = {
      products: prods,
      name: this.ShoplistName,
      // id: this.props.shoplistId,
    };
    // console.log('SHOPLIST >  ', Shoplist);

    if (this.props.modal.purpose === 'new') {
      // console.log('add');
      this.props.addShoplist(Shoplist);
    } else if (this.props.modal.purpose === 'update') {
      // console.log('update');
      this.props.updateShoplist({ ...Shoplist, id: this.props.shoplistId });
    }

    /* this.props.modal.purpose === 'new'
      ? this.props.addShoplist(Shoplist)
      : this.props.updateShoplist(Shoplist); */

    // this.props.updateShoplist(Shoplist);
    // this.props.addShoplist(Shoplist);

    // if (this.props.isDone) this.closeWindow();
  }

  getShoplistName() {
    return {
      name: this.inputName.state.value,
    };
  }

  saveShoplist() {
    // work when delete from DOM
    // this.props.history.push('/products');

    this.ShoplistName = this.getShoplistName().name;
    console.log('name', this.ShoplistName);
    this.props.toggleShoplistWindow('close');
  }

  closeWindow() {
    this.props.toggleShoplistWindow('close');
    // this.props.clearCurrentProduct();
  }

  render() {
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
  // isDone: state.shoplist.shoplist.isLoading,
  productName: state.shoplist.shoplist.name,
  shoplistId: state.shoplist.shoplist._id,
});

const mapDispatchToProps = dispatch => ({
  addShoplist: data => dispatch(addShoplist(data)),
  updateShoplist: data => dispatch(updateShoplist(data)),
  toggleShoplistWindow: purpose => dispatch(toggleShoplistWindow(purpose)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ShoplistFormContainer),
);
