import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const CloseButton = ({ closeForm }) => (
  <Button modClass="Button_onlyIcon Button-Close" handleClick={closeForm}>
    <FontAwesomeIcon icon="times" className="Button-Icon" />
  </Button>
);

CloseButton.propTypes = {
  closeForm: PropTypes.func,
};

export default CloseButton;
