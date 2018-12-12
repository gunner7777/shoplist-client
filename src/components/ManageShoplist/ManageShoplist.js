import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ShoplistHeaderContainer from '../ShoplistHeader/ShoplistHeaderContainer';
import ProductInList from '../ProductInList';
import ShoplistFormContainer from '../ShoplistForm/ShoplistFormContainer';
import Typography from '../lib/Typography';
import { CreateButton } from '../lib/Button';
import Loader from '../lib/Loader';
import './ManageShoplist.scss';

class ManageShoplist extends PureComponent {
  render() {
    const { isLoading, shoplist, createList } = this.props;
    if (isLoading) {
      return <Loader />;
    }

    const createButton = <CreateButton createItem={createList} mod="Button_FixedToBottom" />;

    if (JSON.stringify(shoplist) === '{}')
      return (
        <React.Fragment>
          {createButton}
          <Typography>Fresh shoplist not found</Typography>
        </React.Fragment>
      );

    const shopList = shoplist.products.map((item, index) => (
      <ProductInList name={item.name} key={item._id} number={index + 1} />
    ));
    return (
      <div>
        {createButton}
        <ShoplistHeaderContainer nameList={shoplist.name} id={shoplist._id} />
        {shopList}
        <ShoplistFormContainer shoplistId={shoplist._id} />
      </div>
    );
  }
}

ManageShoplist.propTypes = {
  isLoading: PropTypes.bool,
  shoplist: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        _id: PropTypes.string,
      }),
    ),
    name: PropTypes.string,
    _id: PropTypes.string,
  }),
  createList: PropTypes.func,
};

export default ManageShoplist;
