import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ManageShoplist from './ManageShoplist';
import { getShoplist } from '../../actions/shoplistActions';
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

ManageShoplistContainer.propTypes = {
  shoplist: PropTypes.shape({
    isLoading: PropTypes.bool,
    shoplist: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          _id: PropTypes.string,
        }),
      ),
    }),
  }),
  getShoplist: PropTypes.func,
  toggleShoplistWindow: PropTypes.func,
};

const mapStateToProps = state => ({ shoplist: state.shoplist });

const mapDispatchToProps = dispatch => ({
  getShoplist: () => dispatch(getShoplist()),
  toggleShoplistWindow: purpose => dispatch(toggleShoplistWindow(purpose)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageShoplistContainer);
