import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../index';

describe('badge tests', () => {
  it('Badge rendering with default props', () => {
    const BadgeComponent = shallow(<Badge />);
    expect(BadgeComponent).toMatchSnapshot();
  });

  it('Badge classname have been checking', () => {
    const BadgeComponent = shallow(<Badge Checked />);
    expect(BadgeComponent.props().className).toBe('Badge Badge_Checked');
  });
});
