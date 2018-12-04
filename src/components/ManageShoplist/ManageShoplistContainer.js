import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ManageShoplist from './ManageShoplist';
import { getShoplist, deleteShoplist } from '../../actions/shoplistActions';
import { toggleShoplistWindow } from '../../actions/modalsActions';
import Loader from '../lib/Loader';
import Typography from '../lib/Typography';
import { CreateButton } from '../lib/Button';

class ManageShoplistContainer extends PureComponent {
  constructor() {
    super();
    this.newShoplist = this.newShoplist.bind(this);
  }

  componentDidMount() {
    this.props.getShoplist();
  }

  /* shouldComponentUpdate(nextProps) {
    return nextProps.shoplist === this.props.shoplist;
  } */

  newShoplist() {
    this.props.toggleShoplistWindow('new');
  }

  render() {
    const { isLoading, shoplist } = this.props.shoplist;
    console.log('1211', shoplist);
    if (isLoading) {
      console.log('2loader');
      return <Loader />;
    }

    if (JSON.stringify(shoplist) === '{}')
      return (
        <React.Fragment>
          <CreateButton createItem={this.newShoplist} />
          <Typography>Fresh shoplist not found</Typography>
        </React.Fragment>
      );

    return <ManageShoplist shoplist={shoplist} />;
  }
}

const mapStateToProps = state => ({
  shoplist: state.shoplist,
});

const mapDispatchToProps = dispatch => ({
  getShoplist: () => dispatch(getShoplist()),
  deleteShoplist: id => dispatch(deleteShoplist(id)),
  toggleShoplistWindow: purpose => dispatch(toggleShoplistWindow(purpose)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageShoplistContainer);
