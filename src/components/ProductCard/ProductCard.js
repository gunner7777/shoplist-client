import React from 'react';
import PropTypes from 'prop-types';
import GroupButton from '../GroupButton';
import Typography from '../lib/Typography';
import { EditButton, DeleteButton } from '../lib/Button';
import './ProductCard.scss';

const ProductCard = ({ name, _id, deleteProduct, formProduct }) => (
  <div className="ProductCard Flex Flex_jcSB">
    <Typography modClass="ProductCard-Name">{name}</Typography>
    <div className="ProductCard-Button">
      <GroupButton productId={_id}>
        <EditButton showForm={formProduct} />
        <DeleteButton deleteItem={deleteProduct} />
      </GroupButton>
    </div>
  </div>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func,
  _id: PropTypes.string.isRequired,
  formProduct: PropTypes.func.isRequired,
};

export default ProductCard;
