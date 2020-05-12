import React from 'react';

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MyComp from './comp';

configure({ adapter: new Adapter() });

describe('Component with save method', () => {
  it('should render properly', () => {
    const tree = renderer.create(<MyComp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Method should not save if name passed is empty white space', () => {
    const wrapper = mount(<MyComp />);
    const instance = wrapper.instance();
    const name = '  ';
    const val = instance._onClickSaveLayout(name);
    expect(val).toBe(false);
  });
  it('should call handleName method if valid name is passed', () => {
    const wrapper = mount(<MyComp />);
    const instance = wrapper.instance();
    instance.handleName = jest.fn();
    const name = '   Vishnu Pasad   ';
    instance._onClickSaveLayout(name);
    expect(instance.handleName).toHaveBeenCalledTimes(1);
  });
});
