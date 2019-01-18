import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App tests', () => {
  describe('App rendering', () => {
    it('initial rendering', () => {
      const AppComponent = shallow(<App />);
      expect(AppComponent).toMatchSnapshot();
    });
  });

  describe('props tests', () => {
    it('we click edit button on product', () => {
      const props = {
        showProductForm: true,
      };
      const AppComponent = shallow(<App {...props} />);
      console.log(AppComponent.debug());
      expect(AppComponent.props().showProductForm).toEqual(true);
      expect(AppComponent.find('.ProductForm').length).toEqual(1);
    });
  });
});
