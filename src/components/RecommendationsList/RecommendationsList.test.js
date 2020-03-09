import React from 'react';
import { shallow } from 'enzyme';

import { RecommendationsList } from './RecommendationsList';

describe('ReadingList', () => {
  let wrapper;

  const recommendations = [
    {title: "Test Title", url: 'www.example.com'},
    {title: "Test Title 2", url: 'www.anotherwebsite.com'},
  ];

  const mockGetRequest = () => {
    return new Promise((resolve, reject) => {
      resolve(recommendations);
    });
  }

  const flushPromises = () => new Promise(setImmediate);

  beforeEach(() => {
    wrapper = shallow(
      <RecommendationsList makeGetRequest={ mockGetRequest }/>);
  })

  it('renders without crashing', () => {
    const recommendationsListComponent = wrapper.find(".component-recommendations-list");
    expect(recommendationsListComponent.exists()).toBe(true);
  });

  it('retrieves and renders a list of recommendations on rendering', () => {
    const recommendationElements = wrapper.find(".element-recommendation");
    expect(recommendationElements.length).toBe(2);
  });
});
