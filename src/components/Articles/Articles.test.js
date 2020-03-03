import React from 'react';
import { shallow } from 'enzyme';

import Articles from './Articles';

describe('ReadingList', () => {
  let wrapper;
  const articles = [
    {url: 'www.example.com'},
    {url: 'www.anotherwebsite.com'},
    {url: 'www.someothersite.com'}
  ];

  beforeEach(() => {
    wrapper = shallow(<Articles articles={ articles }/>);
  })

  it('renders without crashing', () => {
    const articlesComponent = wrapper.find("[data-test='component-articles']");
    expect(articlesComponent.exists()).toBe(true);
  });

  it('renders a list of passed articles', () => {
    const articleComponents = wrapper.find("[data-test='article-div']");
    expect(articleComponents.length).toBe(3);
  })
})
