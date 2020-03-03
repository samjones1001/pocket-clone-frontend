import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ArticleContainer from './ArticleContainer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

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
