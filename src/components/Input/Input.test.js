import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from './Input';
import Button from '../Button/Button';

const handleSubmitStub = (e, textfieldContent) => {
  return null;
}

describe('Input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<
      Input placeholderText="Placeholder text"
      buttonText="Button text"
      handleSubmit={handleSubmitStub}
    />);
  });

  it('renders without crashing', () => {
    let inputElement = wrapper.find(".component-input");
    expect(inputElement.exists()).toBe(true);
  });

  it('renders an input element', () => {
    const inputElement = wrapper.find(".input-textfield");
    expect(inputElement.exists()).toBe(true);
  });

  it('renders the passed placeholder text', () => {
    const inputElement = wrapper.find(".input-textfield");
    expect(inputElement.prop('placeholder')).toEqual('Placeholder text');
  });

  it('renders a button', () => {
    const buttonElement = wrapper.find(Button);
    expect(buttonElement.exists()).toBe(true);
  });

  it('updates state on a change in the text field', () => {
    const newValue = "testing component";
    const inputElement = wrapper.find(".input-textfield")

    inputElement.simulate('change', { target: { value: newValue }});
    expect(wrapper.state().content).toEqual(newValue);
  });

  it('resets state on button click', () => {
    const newValue = "testing component";
    const inputElement = wrapper.find(".input-textfield");
    const buttonElement = wrapper.find(Button);

    inputElement.simulate('change', { target: { value: newValue }});
    buttonElement.simulate('click');
    expect(wrapper.state().content).toEqual('');
  });
})
