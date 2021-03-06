import React from 'react';
import PropTypes from 'prop-types';
import Input from '../lib/Input';
import { SaveButton, CloseButton } from '../lib/Button';
import Typography from '../lib/Typography';
import './ProductForm.scss';

const ProductForm = ({ show, closeWindow, inputRef, inputValue, saveProduct }) => (
  <div className={`ProductForm-Outer ${show ? 'ProductForm_Show' : 'ProductForm_Hide'}`}>
    <div className="ProductForm">
      <div className="ProductForm-Close text-right">
        <CloseButton closeForm={closeWindow} />
      </div>
      <Typography variant="title" tag="h3" modClass="text-center">
        Product name
      </Typography>
      <Input label="Name" ref={inputRef} currValue={inputValue} />
      <SaveButton saveItem={saveProduct} mod="Button_Center" />
    </div>
  </div>
);

ProductForm.propTypes = {
  show: PropTypes.bool,
  closeWindow: PropTypes.func,
  inputRef: PropTypes.func,
  inputValue: PropTypes.string,
  saveProduct: PropTypes.func,
};

export default ProductForm;
