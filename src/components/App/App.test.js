import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import ArticleContainer from '../ArticleContainer/ArticleContainer';

describe("App", () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.exists()).toBe(true);
  });

  it('renders an ArticleContainer component', () => {
    const wrapper = shallow(<App />);
    const articleContainerComponent = wrapper.find(ArticleContainer);
    expect(articleContainerComponent.exists()).toBe(true);
  });
})
