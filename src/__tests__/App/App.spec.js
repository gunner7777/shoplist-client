import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Route, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../../components/App';

// const store = createStore(() => ({}));

describe('App tests', () => {
  describe('App rendering', () => {
    it('initial rendering', () => {
      const AppComponent = shallow(<App />);
      expect(AppComponent).toMatchSnapshot();
    });
  });

  describe('props tests', () => {
    it('we click edit button on product', () => {
      const mockStore = configureMockStore();
      const initialState = {
        shoplist: {
          isLoading: true,
        },
        modals: {
          isShowProductForm: true,
        },
      };
      // const props = { showProductForm: true };
      const store = mockStore(initialState);

      const AppComponent = mount(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );
      expect(AppComponent.props().showProductForm).toEqual(true);
      // expect(AppComponent.find('.ProductForm').length).toEqual(1);
    });
  });
});
