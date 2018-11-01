import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { menuItems } from '../../constants/constants';

const Menu = () => {
  const menu = menuItems.map(item => (
    <Link key={shortid.generate()} to={item.link}>
      {item.text}
    </Link>
  ));
  return <div>{menu}</div>;
};

Menu.propTypes = {};

export default Menu;
