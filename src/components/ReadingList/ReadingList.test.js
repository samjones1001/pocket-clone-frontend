import React from 'react';
import { shallow } from 'enzyme';

import ReadingList from './ReadingList';
import Article from '../Article/Article';
import Input from '../Input/Input';

describe('ReadingList', () => {
  let wrapper;
  const articles = [
    {url: 'www.example.com'},
    {url: 'www.anotherwebsite.com'},
    {url: 'www.someothersite.com'}
  ];

  beforeEach(() => {
    wrapper = shallow(<ReadingList articles={ articles } handleInputSubmit=''/>);
  })

  it('renders without crashing', () => {
    const readingListComponent = wrapper.find("[data-test='component-reading-list']");
    expect(readingListComponent.exists()).toBe(true);
  });

  it('renders a list of passed articles', () => {
    const articleComponents = wrapper.find("[data-test='article-div']");
    expect(articleComponents.length).toBe(3);
  })

  it('renders an Input component', () => {
    const inputComponent = wrapper.find(Input);
    expect(inputComponent.exists()).toBe(true);
  });
});
