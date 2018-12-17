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
    const { isLoading, shoplist, createList, modal } = this.props;
    if (isLoading) {
      return <Loader />;
    }

    const createButton = <CreateButton createItem={createList} mod="Button_FixedToBottom" />;

    let content;
    if (!modal.isShowShoplistForm) {
      if (JSON.stringify(shoplist) !== '{}') {
        const shopList = shoplist.products.map((item, index) => (
          <ProductInList name={item.name} key={item._id} number={index + 1} />
        ));
        content = (
          <React.Fragment>
            <ShoplistHeaderContainer nameList={shoplist.name} id={shoplist._id} />
            {shopList}
          </React.Fragment>
        );
      } else {
        content = <Typography>Fresh shoplist not found</Typography>;
      }

      return (
        <div>
          {createButton}
          {content}
        </div>
      );
    }

    return (
      <React.Fragment>
        {createButton}
        <ShoplistFormContainer shoplistId={shoplist._id} />
      </React.Fragment>
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
  modal: PropTypes.shape({
    isShowShoplistForm: PropTypes.bool,
  }),
};

export default ManageShoplist;
