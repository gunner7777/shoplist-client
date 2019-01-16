import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../index';

describe('Badge tests', () => {
  describe('Badge render', () => {
    it('Badge rendering with default props', () => {
      const BadgeComponent = shallow(<Badge />);
      expect(BadgeComponent).toMatchSnapshot();
    });
  });

  describe('props and state', () => {
    const initialState = {
      isCheck: false,
    };
    const props = {
      children: <span>Product</span>,
      getIdProduct: () => {},
      Checked: false,
      productId: '1',
    };

    const BadgeComponent = shallow(<Badge {...props} />);

    it('Badge classname and state by default', () => {
      expect(BadgeComponent.state().isCheck).toEqual(initialState.isCheck);
      expect(BadgeComponent.props().className).toEqual('Badge ');
    });

    it('Badge children', () => {
      expect(BadgeComponent.props().children).toEqual(props.children);
    });

    it('Badge id', () => {
      expect(BadgeComponent.props().id).toEqual(props.id);
    });

    it('Badge click function. Badge had not been selected. Select it', () => {
      BadgeComponent.find('.Badge').simulate('click');
      expect(BadgeComponent.state().isCheck).toEqual(!initialState.isCheck);
      expect(BadgeComponent.props().className).toEqual('Badge Badge_Checked');
    });

    it('Badge click function. Badge had been selected. Cancel it', () => {
      BadgeComponent.find('.Badge').simulate('click');
      expect(BadgeComponent.state().isCheck).toEqual(initialState.isCheck);
      expect(BadgeComponent.props().className).toEqual('Badge ');
    });
  });
});
