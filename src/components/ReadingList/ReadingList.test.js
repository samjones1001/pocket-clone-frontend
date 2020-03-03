import React from 'react';
import { shallow } from 'enzyme';

import ReadingList from './ReadingList';
import Articles from '../Articles/Articles';
import Input from '../Input/Input';

describe('ReadingList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReadingList articles='' handleInputSubmit=''/>);
  })

  it('renders without crashing', () => {
    const readingListComponent = wrapper.find("[data-test='component-reading-list']");
    expect(readingListComponent.exists()).toBe(true);
  });

  it('renders an Articles component', () => {
    const articlesComponent = wrapper.find(Articles);
    expect(articlesComponent.exists()).toBe(true);
  });

  it('renders an Input component', () => {
    const inputComponent = wrapper.find(Input);
    expect(inputComponent.exists()).toBe(true);
  });
})
