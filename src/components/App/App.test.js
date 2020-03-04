import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import WrappedReadingList from '../ReadingList/ReadingList';

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />)
  });

  it('renders without crashing', () => {
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.exists()).toBe(true);
  });

  it('renders a WrappedReadingList component', () => {
    const readingListComponent = wrapper.find("[data-test='component-reading-list']");
    expect(readingListComponent.exists()).toBe(true);
  });
});
