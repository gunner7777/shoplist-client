import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Loader.scss';

const Loader = () => (
  <div className="Loader-Outer Text_Center">
    <FontAwesomeIcon icon="spinner" className="Loader" />
  </div>
);

export default Loader;
