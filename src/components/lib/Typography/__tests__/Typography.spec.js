import React from 'react';
import { shallow } from 'enzyme';
import Typography from '../index';

describe('typography tests', () => {
  it('Typography rendering with default props', () => {
    const TypographyComponent = shallow(<Typography />);
    expect(TypographyComponent).toMatchSnapshot();
  });

  it('Typography rendering with custom props', () => {
    const props = {
      tag: 'h3',
      variant: 'title',
      children: 'custom props',
    };

    const TypographyComponent = shallow(<Typography {...props} />);
    expect(TypographyComponent).toMatchSnapshot();
  });
});
