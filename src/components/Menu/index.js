import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { menuItems } from '../../constants/constants';
import './Menu.scss';

const Menu = () => {
  const menu = menuItems.map(item => (
    <Link key={shortid.generate()} to={item.link} className="Menu-Link">
      {item.text}
    </Link>
  ));
  return <div className="Menu">{menu}</div>;
};

Menu.propTypes = {};

export default Menu;
