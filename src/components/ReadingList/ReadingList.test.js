import React from 'react';
import { shallow } from 'enzyme';

import ReadingList from './ReadingList';

describe('ReadingList', () => {
  let wrapper;
  const articles = [
    {url: 'www.example.com'},
    {url: 'www.anotherwebsite.com'},
    {url: 'www.someothersite.com'}
  ];

  beforeEach(() => {
    wrapper = shallow(<ReadingList articles={ articles }/>);
  })

  it('renders without crashing', () => {
    const readingList = wrapper.find("[data-test='component-reading-list']");
    expect(readingList.exists()).toBe(true);
  });

  it('renders a list of passed articles', () => {
    const articleComponents = wrapper.find("[data-test='article-div']");
    expect(articleComponents.length).toBe(3);
  })
})
