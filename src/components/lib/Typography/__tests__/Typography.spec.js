import React from 'react';
import { shallow } from 'enzyme';
import Typography from '../index';

describe('typography tests', () => {
  it('Typography rendering with default props', () => {
    const TypographyComponent = shallow(<Typography />);
    expect(TypographyComponent).toMatchSnapshot();
  });

  it('Typography set tag h3', () => {
    const props = {
      tag: 'h3',
      variant: 'title',
      children: 'custom props',
    };

    const TypographyComponent = shallow(<Typography {...props} />);
    expect(TypographyComponent.find('h3')).toHaveLength(1);
  });

  it('Typography set title style with h3', () => {
    const props = {
      tag: 'h3',
      variant: 'title',
      children: 'custom props',
    };

    const TypographyComponent = shallow(<Typography {...props} />);
    expect(TypographyComponent.props().className).toBe('Typography-Title');
  });

  it('Typography children', () => {
    const props = {
      tag: 'h3',
      variant: 'title',
      children: 'custom props',
    };

    const TypographyComponent = shallow(<Typography {...props} />);
    expect(TypographyComponent.props().children).toBe('custom props');
  });
});
