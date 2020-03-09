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
      text: 'test button',
      onClick
    }

    wrapper = shallow(<Button { ...props }/>)
    buttonComponent = wrapper.find(".test-button");
  });

  it('renders without crashing', () => {
    expect(buttonComponent.exists()).toBe(true);
  });

  it(`renders the passed button text`, () => {
    expect(buttonComponent.text()).toEqual('test button');
  });

  it('calls the passed function on click', () => {
    buttonComponent.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
})
