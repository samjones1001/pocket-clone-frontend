import React from 'react';
import { shallow } from 'enzyme';

import Article from './Article';

describe('Article', () => {
  let wrapper;
  let url;

  beforeEach(() => {
    url = 'www.example.com';
    wrapper = shallow(<Article url={ url }/>);
  });

  it('renders the passed url', () => {
    let linkElement = wrapper.find("[data-test='article-link']");
    expect(linkElement.text()).toEqual(url);
  });

  it(`renders the delete button`, () => {
    let buttonElement = wrapper.find("[data-test='delete-button']");
    expect(buttonElement.exists()).toBe(true);
  });
})
