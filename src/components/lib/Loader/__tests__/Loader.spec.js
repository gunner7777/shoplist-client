import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../index';

describe('loader test', () => {
  it('loader snapshot', () => {
    const LoaderComponent = shallow(<Loader />);
    expect(LoaderComponent).toMatchSnapshot();
  });
});
