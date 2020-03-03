import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import ReadingList from '../ReadingList/ReadingList';

describe("App", () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.exists()).toBe(true);
  });

  it('renders a ReadingList component', () => {
    const wrapper = shallow(<App />);
    const readingListComponent = wrapper.find(ReadingList);
    expect(readingListComponent.exists()).toBe(true);
  });
})
