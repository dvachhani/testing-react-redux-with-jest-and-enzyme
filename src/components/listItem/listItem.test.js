import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils/utilities';
import ListItem from './ListItem';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Test title',
        description: 'Test description'
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component renders', () => {
    let component;
    beforeEach(() => {
      const props = {
        title: 'Test title',
        description: 'Test description'
      };
      component = shallow(<ListItem {...props} />);
    });

    it('Should render without error', () => {
      const listItemComponent = findByTestAttr(component, 'listItemComponent');
      expect(listItemComponent.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAttr(component, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('Should render a description', () => {
      const description = findByTestAttr(component, 'componentDescription');
      expect(description.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {
    let component;
    beforeEach(() => {
      const props = {
        description: 'Test description'
      };
      component = shallow(<ListItem {...props} />);
    });

    it('Does not render without a title prop', () => {
      const listItemComponent = findByTestAttr(component, 'listItemComponent');
      expect(listItemComponent.length).toBe(0);
    });
  });
});
