import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from '../../../Utils/utilities';

describe('Header Component', () => {
  let component;
  beforeEach((props = {}) => {
    component = shallow(<Header {...props} />);
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render 3 logos', () => {
    const logos = findByTestAttr(component, 'logoImg');
    expect(logos.length).toBe(3);
  });
});
