import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
import { findByTestAttr, checkProps } from '../../../Utils/utilities';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline component', () => {
  describe('Have props', () => {
    let component;
    beforeEach(() => {
      const props = {
        headline: 'Test Header',
        desc: 'Test Description'
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render a h1', () => {
      const h1 = findByTestAttr(component, 'headline');
      expect(h1.length).toBe(1);
    });

    it('Should render a paragraph', () => {
      const paragraph = findByTestAttr(component, 'description');
      expect(paragraph.length).toBe(1);
    });
  });

  describe("Doesn't have props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it('Should not render', () => {
      const wrapper = findByTestAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(0);
    });
  });

  describe('Check PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        headline: 'Test Header',
        desc: 'Test Description',
        tempArr: [
          {
            fname: 'Test fName',
            lName: 'Test lName',
            email: 'Test Email',
            age: 24,
            onlineStatus: true
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
