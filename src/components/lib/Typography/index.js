import React from 'react';
import PropTypes from 'prop-types';
import './Typography.scss';
import './Typography.media.scss';

/*
props
  variant: title, text
  tag: p, h1, h2, h3, ...
  modClass
*/

const Typography = ({ tag, variant, modClass, children }) => {
  // const textTag = tag || 'p';
  const style = [];
  if (variant === 'title') {
    style.push('Typography-Title');
  } else if (variant === 'text') {
    style.push('Typography-Text');
  }

  const s = modClass ? style.push(modClass) : null;

  return React.createElement(tag, { className: style.join(' ') }, children);
};

Typography.defaultProps = {
  tag: 'p',
  variant: 'text',
  children: 'test',
};

Typography.propTypes = {
  variant: PropTypes.string,
  tag: PropTypes.string,
  modClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Typography;
