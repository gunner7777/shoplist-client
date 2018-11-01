import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShoplistWindow } from '../../actions/modalsActions';
import ShoplistHeader from './ShoplistHeader';

class ShoplistHeaderContainer extends PureComponent {
  constructor() {
    super();

    this.newShoplist = this.newShoplist.bind(this);
    this.updateShoplist = this.updateShoplist.bind(this);
  }

  newShoplist() {
    this.props.toggleShoplistWindow('new');
  }

  updateShoplist() {
    this.props.toggleShoplistWindow('update');
  }

  render() {
    return (
      <ShoplistHeader
        addForm={this.newShoplist}
        updateForm={this.updateShoplist}
        nameList={this.props.nameList}
        id={this.props.id}
      />
    );
  }
}

ShoplistHeaderContainer.propTypes = {};

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  toggleShoplistWindow: purpose => dispatch(toggleShoplistWindow(purpose)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ShoplistHeaderContainer);
