import React from 'react';
import { shallow } from 'enzyme';
import Typography from '../index';

describe('typography tests', () => {
  describe('snapshot render', () => {
    it('Typography rendering with default props', () => {
      const TypographyComponent = shallow(<Typography />);
      expect(TypographyComponent).toMatchSnapshot();
    });
  });

  describe('props tests', () => {
    const props = {
      tag: 'h3',
      variant: 'title',
      children: 'custom props',
    };
    const TypographyComponent = shallow(<Typography {...props} />);

    it('Typography set tag h3 and set title style', () => {
      expect(TypographyComponent.find('h3')).toHaveLength(1);
      expect(TypographyComponent.props().className).toBe('Typography-Title');
    });

    /* it('Typography set title style with h3', () => {
    expect(TypographyComponent.props().className).toBe('Typography-Title');
  }); */

    it('Typography children', () => {
      expect(TypographyComponent.props().children).toBe('custom props');
    });
  });
});
