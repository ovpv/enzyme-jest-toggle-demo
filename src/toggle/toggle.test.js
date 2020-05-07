import { shallow, configure, mount } from 'enzyme';
import React from 'react';
import Toggle from './toggle';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('Toggle Component', () => {
  it('Renders Correctly', () => {
    const tree = renderer.create(<Toggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should have a button to toggle', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.find('button.toggle-button')).toHaveLength(1);
  });
  it('Should Update State on Toggle Click event', () => {
    const wrapper = mount(<Toggle />);
    const instance = wrapper.instance();
    const toggleVal = instance.state.toggle;
    wrapper.find('button.toggle-button').simulate('click');
    expect(instance.state.toggle).toBe(!toggleVal);
  });
});

describe('Toggle Component handleAfterToggle Method', () => {
  it('show proper heading after toggle click to true', () => {
    const wrapper = mount(<Toggle />);
    const instance = wrapper.instance();
    instance.setState({ toggle: true });
    instance.handleAfterToggle();
    expect(instance.headingRef.current.innerHTML).toBe(
      'Hiding private content'
    );
  });
  it('show proper heading after toggle click to false', () => {
    const wrapper = mount(<Toggle />);
    const instance = wrapper.instance();
    instance.setState({ toggle: false });
    instance.handleAfterToggle();
    expect(instance.headingRef.current.innerHTML).toBe(
      'Showing private content'
    );
  });
});
