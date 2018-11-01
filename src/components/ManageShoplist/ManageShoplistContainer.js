import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ManageShoplist from './ManageShoplist';
import { getShoplist } from '../../actions/shoplistActions';
import Loader from '../lib/Loader';

class ManageShoplistContainer extends PureComponent {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getShoplist();
  }

  render() {
    if (this.props.shoplist.isLoading) return <Loader />;

    return <ManageShoplist {...this.props.shoplist.shoplist} />;
  }
}

const mapStateToProps = state => ({
  shoplist: state.shoplist,
});

const mapDispatchToProps = dispatch => ({
  getShoplist: () => dispatch(getShoplist()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageShoplistContainer);
