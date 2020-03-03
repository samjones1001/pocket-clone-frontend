import React from 'react';
import { shallow } from 'enzyme';

import Article from './Article';

describe('Article', () => {
  it('renders the passed url', () => {
    const url = 'www.example.com';
    const wrapper = shallow(<Article url={ url }/>);
    
    let linkElement = wrapper.find("[data-test='article-link']");
    expect(linkElement.text()).toEqual(url);
  });
})
