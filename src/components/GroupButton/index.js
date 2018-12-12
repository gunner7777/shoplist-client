import React from 'react';
import PropTypes from 'prop-types';
import './GroupButton.scss';

const GroupButton = ({ productId, children }) => (
  <div className="GroupButton Flex" data-productid={productId}>
    {children}
  </div>
);

GroupButton.propTypes = {
  children: PropTypes.node,
  productId: PropTypes.string,
};

export default GroupButton;
