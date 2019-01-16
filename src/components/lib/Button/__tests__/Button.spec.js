import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button tests', () => {
  describe('button rendering', () => {
    it('button initial rendering', () => {
      const ButtonComponent = shallow(<Button />);
      expect(ButtonComponent).toMatchSnapshot();
    });
  });

  describe('props and state tests', () => {
    it('when disabled button', () => {
      const ButtonComponent = shallow(<Button disabled />);
      expect(ButtonComponent.props().disabled).toEqual('disabled');
    });

    it('when add class modification', () => {
      const ButtonComponent = shallow(<Button modClass="Button_Add" />);
      expect(ButtonComponent.props().className).toEqual('Button Button_Add');
    });

    it('button without class modification', () => {
      const ButtonComponent = shallow(<Button />);
      expect(ButtonComponent.props().className).toEqual('Button');
    });

    it('children in button component', () => {
      const props = {
        children: '1',
      };

      const ButtonComponent = shallow(<Button {...props} />);
      expect(ButtonComponent.props().children).toEqual(props.children);
    });

    it('simulate button click method', () => {
      const mockClick = jest.fn();
      const props = {
        handleClick: mockClick,
      };

      const ButtonComponent = shallow(<Button {...props} />);
      ButtonComponent.find('.Button').simulate('click', {
        preventDefault: () => {},
      });
      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });

  // modclass
  // children
  // disabled props
  // click jest.fn()
});
