import React from 'react';
import { shallow } from 'enzyme';

import Article from './Article';

describe('Article', () => {
  let wrapper;
  let title;

  beforeEach(() => {
    let url = 'www.example.com';
    title = 'an example website'

    wrapper = shallow(
      <Article
        url={ 'www.example.com' }
        title={ 'an example website' }
      />);
  });

  it('renders the passed title', () => {
    let linkElement = wrapper.find("[data-test='article-link']");
    expect(linkElement.text()).toEqual(title);
  });

  it(`renders the delete button`, () => {
    let buttonElement = wrapper.find("[data-test='delete-button']");
    expect(buttonElement.exists()).toBe(true);
  });
})
