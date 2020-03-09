import React from 'react';
import { mount } from 'enzyme';

import Recommendation from './Recommendation';
import Button from '../Button/Button'

describe('Button', () => {
  let wrapper;
  let addToList;

  beforeEach(() => {
    addToList = jest.fn();

    wrapper = mount(
      <Recommendation
        url='www.example.com'
        title='Test Title'
        handleAddToList={ addToList }
      />);
  });

  it('renders the passed title', () => {
    let recommendationLink = wrapper.find(".recommendation-link");
    expect(recommendationLink.text()).toEqual("Test Title");
  });

  it(`links to the passed url`, () => {
    let recommendationUrl = wrapper.find(".recommendation-link").props().href;

    expect(recommendationUrl).toBe("www.example.com");
  });

  it('renders a button', () => {
    let buttonElement = wrapper.find(Button);
    expect(buttonElement.exists()).toBe(true);
  });

  it('calls passed add to list function on button click', () => {
    let buttonElement = wrapper.find(Button);
    buttonElement.simulate('click');

    expect(addToList).toHaveBeenCalled();
  });
})
