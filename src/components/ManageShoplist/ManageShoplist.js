import React from 'react';
import PropTypes from 'prop-types';
import ShoplistHeaderContainer from '../ShoplistHeader/ShoplistHeaderContainer';
import ProductInList from '../ProductInList';
// import ProductObserverContainer from '../ProductObserver/ProductObserverContainer';
import ShoplistFormContainer from '../ShoplistForm/ShoplistFormContainer';
import './ManageShoplist.scss';

const ManageShoplist = ({ name, products, _id }) => {
  const shopList = products.map((item, index) => (
    <ProductInList name={item.name} key={item._id} number={index + 1} />
  ));
  return (
    <div>
      <ShoplistHeaderContainer nameList={name} id={_id} />
      {shopList}
      {/* <ProductObserverContainer /> */}
      <ShoplistFormContainer shoplistId={_id} />
    </div>
  );
};

ManageShoplist.propTypes = {
  name: PropTypes.string,
  products: PropTypes.array,
  _id: PropTypes.string,
};

export default ManageShoplist;
