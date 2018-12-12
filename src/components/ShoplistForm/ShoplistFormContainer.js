import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addShoplist, updateShoplist, cleanChosenProducts } from '../../actions/shoplistActions';
import { toggleShoplistWindow } from '../../actions/modalsActions';
import ShoplistForm from './ShoplistForm';

class ShoplistFormContainer extends PureComponent {
  constructor() {
    super();

    this.saveShoplist = this.saveShoplist.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  closeWindow() {
    this.props.toggleShoplistWindow('close');
    this.props.cleanChosenProducts();
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

  render() {
    return (
      <div>
        <ShoplistForm
          closeWindow={this.closeWindow}
          getCheckedId={this.getCheckedId}
          saveShoplist={this.saveShoplist}
          inputRef={el => (this.inputName = el)}
          inputValue={this.props.modal.purpose === 'new' ? '' : this.props.productName}
          show={this.props.modal.isShowShoplistForm}
        />
      </div>
    );
  }
}

ShoplistFormContainer.propTypes = {};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoplistFormContainer);
