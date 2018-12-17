import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/*
props:
  'modClass' additional class
  'disabled'
  'children'
  'handleClick' function from parent
*/

const Button = ({ modClass, disabled, handleClick, children }) => {
  const additionalClassName = modClass !== undefined ? ` ${modClass}` : '';
  return (
    <button
      type="button"
      className={`Button${additionalClassName}`}
      disabled={disabled && 'disabled'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  modClass: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
