import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const CreateButton = ({ mod, createItem }) => (
  <Button modClass={`Button_onlyIcon Button-Create ${mod}`} handleClick={createItem}>
    <FontAwesomeIcon icon="file-alt" className="Button-Icon" />
  </Button>
);

CreateButton.propTypes = {
  createItem: PropTypes.func,
  mod: PropTypes.string,
};

export default CreateButton;
