import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const AddButton = ({ mod, addItem }) => (
  <Button modClass={`Button_onlyIcon Button-Add ${mod}`} handleClick={addItem}>
    <FontAwesomeIcon icon="plus" className="Button-Icon" />
  </Button>
);

AddButton.defaultProps = {
  mod: '',
};

AddButton.propTypes = {
  mod: PropTypes.string,
  addItem: PropTypes.func,
};

export default AddButton;
