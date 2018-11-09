import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ManageShoplist from './ManageShoplist';
import { getShoplist, deleteShoplist } from '../../actions/shoplistActions';
import Loader from '../lib/Loader';
import Typography from '../lib/Typography';

class ManageShoplistContainer extends PureComponent {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getShoplist();
  }

  render() {
    if (this.props.shoplist.isLoading) return <Loader />;

    if (JSON.stringify(this.props.shoplist.shoplist) === '{}')
      return <Typography>Fresh shoplist not found</Typography>;

    return <ManageShoplist {...this.props.shoplist.shoplist} />;
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
