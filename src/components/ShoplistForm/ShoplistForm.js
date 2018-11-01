import React from 'react';
import PropTypes from 'prop-types';
import Input from '../lib/Input';
import ProductObserverContainer from '../ProductObserver/ProductObserverContainer';
import { SaveButton, CloseButton } from '../lib/Button';
import './ShoplistForm.scss';

const ShoplistForm = ({
  getCheckedId,
  getShoplistName,
  inputRef,
  inputValue,
  saveShoplist,
  closeWindow,
  show,
}) => (
  <div className={`ShoplistForm-Outer ${show ? 'ShoplistForm_Show' : 'ShoplistForm_Hide'}`}>
    <div className="ShoplistForm">
      <div className="ShoplistForm-Close text-right">
        <CloseButton closeForm={closeWindow} />
      </div>
      <div>
        <Input
          getShoplistName={getShoplistName}
          label="Name"
          ref={inputRef}
          currValue={inputValue}
        />
        <ProductObserverContainer getCheckedId={getCheckedId} />
        <SaveButton saveItem={saveShoplist} />
      </div>
    </div>
  </div>
);

ShoplistForm.propTypes = {
  getCheckedId: PropTypes.func,
  getShoplistName: PropTypes.func,
  saveShoplist: PropTypes.func,
  closeWindow: PropTypes.func,
  inputRef: PropTypes.string,
  inputValue: PropTypes.string,
  show: PropTypes.bool,
};

export default ShoplistForm;
