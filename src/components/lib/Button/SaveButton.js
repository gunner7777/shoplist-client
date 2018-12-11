import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const SaveButton = ({ mod, saveItem }) => (
  <Button modClass={`Button-Save ${mod}`} handleClick={saveItem}>
    <FontAwesomeIcon icon="save" className="Button-Icon" />
    <span className="Button-Text">Save</span>
  </Button>
);

SaveButton.propTypes = {
  saveItem: PropTypes.func,
  mod: PropTypes.string,
};

export default SaveButton;
