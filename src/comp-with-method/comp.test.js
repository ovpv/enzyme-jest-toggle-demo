import React from 'react';

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MyComp, { onClickSaveLayout } from './comp';

configure({ adapter: new Adapter() });

describe('Component with save method', () => {
  it('should render properly', () => {
    const tree = renderer.create(<MyComp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Method should not save if name passed is empty white space', () => {
    const handleName = jest.fn((name) => {
      console.log(name);
    });
    expect(onClickSaveLayout('  ')).toBe(false);
    expect(onClickSaveLayout(' Vishnu prasad ', handleName)).toBe(true);
  });
  it('should call handleName method if valid name is passed', () => {
    const name = '   Vishnu Pasad   ';
    const handleName = jest.fn();
    onClickSaveLayout(name, handleName);
    expect(handleName).toHaveBeenCalled();
  });
});
