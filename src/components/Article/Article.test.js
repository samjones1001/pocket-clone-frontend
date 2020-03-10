import React from 'react';
import { shallow } from 'enzyme';

import Article from './Article';

describe('Article', () => {
  let wrapper;
  let title;

  beforeEach(() => {
    wrapper = shallow(
      <Article
        url='www.example.com'
        title='an example website'
        isRead={ false }
      />);
  });

  it('renders the passed title', () => {
    let linkElement = wrapper.find(".article-card-text");
    expect(linkElement.text()).toEqual('an example website');
  });

  it('renders an abbreviated title if title length is greater that 116 characters', () => {
    let longTitle = `A very long title for an article which would be spread arcross
    multiple lines in the view and would look really messy`
    let abbreviatedTitle = `A very long title for an article which would be spread arcross
    multiple lines in the view and would look really...`

    wrapper.setProps({ title: longTitle });
    wrapper.update();

    let linkElement = wrapper.find(".article-card-text");
    expect(linkElement.text()).toEqual(abbreviatedTitle);
  });

  it(`links to the passed url`, () => {
    let articleUrl = wrapper.find(".article-card-text").props().href;

    expect(articleUrl).toBe("www.example.com");
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
