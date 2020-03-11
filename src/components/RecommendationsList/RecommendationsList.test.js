import React from 'react';
import { shallow } from 'enzyme';

import { RecommendationsList } from './RecommendationsList';
import Recommendation from '../Recommendation/Recommendation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

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

  beforeEach(() => {
    wrapper = shallow(
      <RecommendationsList makeGetRequest={ mockGetRequest }/>);
  })

  it('renders without crashing', () => {
    const recommendationsListComponent = wrapper.find(".component-recommendations-list");
    expect(recommendationsListComponent.exists()).toBe(true);
  });

  it('retrieves and renders a list of recommendations on rendering', () => {
    const recommendationElements = wrapper.find(Recommendation);
    expect(recommendationElements.length).toBe(2);
  });

  it('renders an error message if an error occurs', () => {
    wrapper.setState({ error: "some error message" });
    wrapper.update();

    const errorComponent = wrapper.find(ErrorMessage);
    expect(errorComponent.exists()).toBe(true)
  });

  it('renders a loader component while loading data', () => {
    wrapper.setState({ loading: true });
    wrapper.update();

    const loaderComponent = wrapper.find(Loader);
    expect(loaderComponent.exists()).toBe(true);
  });

  it('removes the loader component once loading is complete', () => {
    wrapper.setState({ loading: false });
    wrapper.update();

    const loaderComponent = wrapper.find(Loader);
    expect(loaderComponent.exists()).toBe(false);
  });
});
