import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const SaveButton = ({ saveItem }) => (
  <Button modClass="Button-Save" handleClick={saveItem}>
    <FontAwesomeIcon icon="save" className="Button-Icon" />
    <span className="Button-Text">Save</span>
  </Button>
);

SaveButton.propTypes = {
  saveItem: PropTypes.func,
};

export default SaveButton;
