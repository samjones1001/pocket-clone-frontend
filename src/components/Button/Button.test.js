import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  let wrapper;
  let onClick
  let buttonComponent

  beforeEach(() => {
    onClick = jest.fn()

    const props = {
      type: 'test-button',
      icon: 'test button',
      onClick
    }

    wrapper = shallow(<Button { ...props }/>)
    buttonComponent = wrapper.find(".test-button");
  });

  it('renders without crashing', () => {
    expect(buttonComponent.exists()).toBe(true);
  });

  it('calls the passed function on click', () => {
    buttonComponent.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
})
