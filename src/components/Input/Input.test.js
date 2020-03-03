import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('Input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<
      Input placeholderText="Placeholder text"
      buttonText="Button text"
    />);
  });

  it('renders without crashing', () => {
    let inputElement = wrapper.find("[data-test='component-input']");
    expect(inputElement.exists()).toBe(true);
  });

  it('renders an input element', () => {
    const inputElement = wrapper.find("[data-test='input-textfield']");
    expect(inputElement.exists()).toBe(true);
  });

  it('renders the passed placeholder text', () => {
    const inputElement = wrapper.find("[data-test='input-textfield']");
    expect(inputElement.prop('placeholder')).toEqual('Placeholder text');
  });

  it('renders a button', () => {
    const buttonElement = wrapper.find("[data-test='input-button']");
    expect(buttonElement.exists()).toBe(true);
  });

  it('renders the passed button text', () => {
    const buttonElement = wrapper.find("[data-test='input-button']");
    expect(buttonElement.text()).toEqual('Button text');
  });
})
