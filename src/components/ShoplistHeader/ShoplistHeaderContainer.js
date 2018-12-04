import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShoplistWindow } from '../../actions/modalsActions';
import { deleteShoplist } from '../../actions/shoplistActions';
import ShoplistHeader from './ShoplistHeader';

class ShoplistHeaderContainer extends PureComponent {
  constructor() {
    super();

    // this.newShoplist = this.newShoplist.bind(this);
    this.updateShoplist = this.updateShoplist.bind(this);
    this.deleteCurrentShoplist = this.deleteCurrentShoplist.bind(this);
  }

  /* newShoplist() {
    this.props.toggleShoplistWindow('new');
  } */

  updateShoplist() {
    this.props.toggleShoplistWindow('update');
  }

  deleteCurrentShoplist() {
    this.props.deleteShoplist(this.props.shoplistId);
  }

  render() {
    return (
      <ShoplistHeader
        // addForm={this.newShoplist}
        updateForm={this.updateShoplist}
        nameList={this.props.nameList}
        id={this.props.id}
        deleteShoplist={this.deleteCurrentShoplist}
      />
    );
  }
}

ShoplistHeaderContainer.propTypes = {};

const mapStateToProps = state => ({
  shoplistId: state.shoplist.shoplist._id,
});

const mapDispatchToProps = dispatch => ({
  toggleShoplistWindow: purpose => dispatch(toggleShoplistWindow(purpose)),
  deleteShoplist: id => dispatch(deleteShoplist(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoplistHeaderContainer);
