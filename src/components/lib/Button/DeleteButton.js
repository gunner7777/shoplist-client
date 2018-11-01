import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const DeleteButton = ({ deleteItem }) => (
  <Button modClass="Button_onlyIcon Button-Delete" handleClick={deleteItem}>
    <FontAwesomeIcon icon="minus" className="Button-Icon" />
  </Button>
);

DeleteButton.propTypes = {
  deleteItem: PropTypes.func,
};

export default DeleteButton;
