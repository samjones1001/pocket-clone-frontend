import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />)
  });

  it('renders without crashing', () => {
    const appComponent = wrapper.find(".component-app");
    expect(appComponent.exists()).toBe(true);
  });

  it('renders a WrappedReadingList component', () => {
    const readingListComponent = wrapper.find(".component-reading-list");
    expect(readingListComponent.exists()).toBe(true);
  });

  it('renders a WrappedRecommendationsList component', () => {
    const recommendationListComponent = wrapper.find(".component-recommendations-list");
    expect(recommendationListComponent.exists()).toBe(true);
  })
});
