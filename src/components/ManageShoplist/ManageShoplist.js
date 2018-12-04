import React from 'react';
import PropTypes from 'prop-types';
import ShoplistHeaderContainer from '../ShoplistHeader/ShoplistHeaderContainer';
import ProductInList from '../ProductInList';
// import ProductObserverContainer from '../ProductObserver/ProductObserverContainer';
import ShoplistFormContainer from '../ShoplistForm/ShoplistFormContainer';
import { CreateButton } from '../lib/Button';
import './ManageShoplist.scss';

const ManageShoplist = props => {
  console.log('asdasdsd', props.shoplist.products);
  const shopList = props.shoplist.products.map((item, index) => (
    <ProductInList name={item.name} key={item._id} number={index + 1} />
  ));
  return (
    <div>
      <ShoplistHeaderContainer nameList={props.shoplist.name} id={props.shoplist._id} />
      {shopList}
      {/* <ProductObserverContainer /> */}
      <ShoplistFormContainer shoplistId={props.shoplist._id} />
    </div>
  );
};

ManageShoplist.propTypes = {
  name: PropTypes.string,
  products: PropTypes.array,
  _id: PropTypes.string,
};

export default ManageShoplist;
