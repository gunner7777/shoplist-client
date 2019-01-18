import React from 'react';
import { shallow } from 'enzyme';
import Input from '../index';

describe('input tests', () => {
  describe('input rendering', () => {
    it('input initial rendering', () => {
      const InputComponent = shallow(<Input />);
      expect(InputComponent).toMatchSnapshot();
    });
  });

  describe('props and state tests', () => {
    const initialState = {
      prevProps: '',
      value: '',
    };

    const InputComponent = shallow(<Input label="text" />);

    it('label for input', () => {
      // const InputComponent = shallow(<Input label="text" />);
      expect(InputComponent.find('.Input-Label').text()).toEqual('text');
    });

    it('if change text in input', () => {
      const newText = '111';
      // const InputComponent = shallow(<Input label="text" />);
      InputComponent.find('.Input-Input').simulate('change', {
        target: { value: newText },
      });
      expect(InputComponent.state().value).toEqual(newText);
    });

    afterAll(() => {
      InputComponent.setState(initialState);
    });
  });
});
