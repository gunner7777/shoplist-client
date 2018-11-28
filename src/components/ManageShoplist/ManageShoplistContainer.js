import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ManageShoplist from './ManageShoplist';
import { getShoplist, deleteShoplist } from '../../actions/shoplistActions';
import Loader from '../lib/Loader';
import Typography from '../lib/Typography';

class ManageShoplistContainer extends PureComponent {
  componentDidMount() {
    this.props.getShoplist();
  }

  /* shouldComponentUpdate(nextProps) {
    return nextProps.shoplist === this.props.shoplist;
  } */

  render() {
    const { isLoading, shoplist } = this.props.shoplist;

    if (isLoading) return <Loader />;

    if (JSON.stringify(shoplist) === '{}') return <Typography>Fresh shoplist not found</Typography>;

    return <ManageShoplist {...shoplist} />;
  }
}

const mapStateToProps = state => ({
  shoplist: state.shoplist,
});

const mapDispatchToProps = dispatch => ({
  getShoplist: () => dispatch(getShoplist()),
  deleteShoplist: id => dispatch(deleteShoplist(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageShoplistContainer);
