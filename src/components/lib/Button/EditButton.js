import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const EditButton = ({ showForm }) => (
  <Button modClass="Button_onlyIcon Button-Edit" handleClick={showForm}>
    <FontAwesomeIcon icon="edit" className="Button-Icon" />
  </Button>
);

EditButton.propTypes = {
  showForm: PropTypes.func,
};

export default EditButton;
