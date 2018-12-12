import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

ShoplistFormContainer.propTypes = {
  modal: PropTypes.shape({
    purpose: PropTypes.string,
    isShowShoplistForm: PropTypes.bool,
  }),
  productName: PropTypes.string,
  shoplistId: PropTypes.string,
  chosenProducts: PropTypes.arrayOf(PropTypes.string),
  addShoplist: PropTypes.func,
  updateShoplist: PropTypes.func,
  toggleShoplistWindow: PropTypes.func,
  cleanChosenProducts: PropTypes.func,
};

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
