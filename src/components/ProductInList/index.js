import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../lib/Typography';
import './ProductInList.scss';

const ProductInList = ({ name, number }) => (
  <div className="ProductInList text-center Flex">
    <div className="ProductInList-Number">
      <Typography tag="p" variant="text">
        {number}
      </Typography>
    </div>
    <div className="ProductInList-Name">
      <Typography tag="p" variant="text">
        {name}
      </Typography>
    </div>
  </div>
);

ProductInList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ProductInList;
