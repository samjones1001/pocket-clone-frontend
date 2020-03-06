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
        url='www.example.com'
        title='an example website'
        isRead={ false }
      />);
  });

  it('renders the passed title', () => {
    let linkElement = wrapper.find(".article-card-text");
    expect(linkElement.text()).toEqual(title);
  });

  it(`renders the delete button`, () => {
    let buttonElement = wrapper.find("[type='btn btn-delete']");
    expect(buttonElement.exists()).toBe(true);
  });

  it('renders a button to mark as read if currently unread', () => {
    let buttonElement = wrapper.find("[type='btn btn-mark-read']");
    expect(buttonElement.exists()).toBe(true);
  });

  it('renders a button to mark as unread if currently read', () => {
    wrapper.setProps({ isRead: true });
    let buttonElement = wrapper.find("[type='btn btn-mark-unread']");
    expect(buttonElement.exists()).toBe(true);
  });
})
