import React from 'react';
import PropTypes from 'prop-types';
import Input from '../lib/Input';
import ProductObserverContainer from '../ProductObserver/ProductObserverContainer';
import { SaveButton, CloseButton } from '../lib/Button';
import Typography from '../lib/Typography';
import './ShoplistForm.scss';

const ShoplistForm = ({
  getCheckedId,
  getShoplistName,
  inputRef,
  inputValue,
  saveShoplist,
  closeWindow,
  // show,
}) => (
  <div className="ShoplistForm">
    <div className="ShoplistForm-Close text-right">
      <CloseButton closeForm={closeWindow} />
    </div>
    <Typography variant="title" tag="h3" modClass="text-center">
      Shoplist
    </Typography>
    <div>
      <Input
        getShoplistName={getShoplistName}
        label="Shoplist Name"
        ref={inputRef}
        currValue={inputValue}
      />
      <ProductObserverContainer getCheckedId={getCheckedId} />
      <SaveButton saveItem={saveShoplist} mod="Button_Center" />
    </div>
  </div>
);

ShoplistForm.propTypes = {
  getCheckedId: PropTypes.string,
  getShoplistName: PropTypes.func,
  saveShoplist: PropTypes.func,
  closeWindow: PropTypes.func,
  inputRef: PropTypes.func,
  inputValue: PropTypes.string,
  // show: PropTypes.bool,
};

export default ShoplistForm;
