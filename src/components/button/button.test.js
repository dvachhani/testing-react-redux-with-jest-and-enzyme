import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils/utilities';
import Button from './Button';

describe('Button Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example button text',
        emitEvent: () => {}
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let component;
    beforeEach(() => {
      const props = {
        buttonText: 'Example button text',
        emitEvent: () => {}
      };
      component = shallow(<Button {...props} />);
    });
    it('Should render a button', () => {
      const button = findByTestAttr(component, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
