import React from 'react';
import { shallow } from 'enzyme';

import ArticleContainer from './ArticleContainer';

describe('ArticleContainer', () => {
  let wrapper;
  const articles = [
    {url: 'www.example.com'},
    {url: 'www.anotherwebsite.com'},
    {url: 'www.someothersite.com'}
  ];

  beforeEach(() => {
    wrapper = shallow(<ArticleContainer articles={ articles }/>);
  })

  it('renders without crashing', () => {
    const articleComponent = wrapper.find("[data-test='component-article-container']");
    expect(articleComponent.exists()).toBe(true);
  });

  it('renders a list of passed articles', () => {
    const articleComponents = wrapper.find("[data-test='article-div']");
    expect(articleComponents.length).toBe(3);
  })
})
