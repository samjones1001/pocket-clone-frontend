import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Article from './Article';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders the passed url', () => {
  const url = 'www.example.com';
  const wrapper = shallow(<Article url={ url }/>);
  let linkElement = wrapper.find("[data-test='article-link']");
  expect(linkElement.text()).toEqual(url);
});
