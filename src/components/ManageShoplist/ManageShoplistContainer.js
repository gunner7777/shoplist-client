import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManageShoplist from './ManageShoplist';
import { getShoplist, deleteShoplist } from '../../actions/shoplistActions';
import { toggleShoplistWindow } from '../../actions/modalsActions';

class ManageShoplistContainer extends Component {
  constructor() {
    super();
    this.newShoplist = this.newShoplist.bind(this);
  }

  componentDidMount() {
    this.props.getShoplist();
  }

  newShoplist() {
    this.props.toggleShoplistWindow('new');
  }

  render() {
    const { isLoading, shoplist } = this.props.shoplist;
    return (
      <ManageShoplist shoplist={shoplist} isLoading={isLoading} createList={this.newShoplist} />
    );
  }
}

const mapStateToProps = state => ({ shoplist: state.shoplist });

const mapDispatchToProps = dispatch => ({
  getShoplist: () => dispatch(getShoplist()),
  deleteShoplist: id => dispatch(deleteShoplist(id)),
  toggleShoplistWindow: purpose => dispatch(toggleShoplistWindow(purpose)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageShoplistContainer);
