import React from 'react';
import { shallow} from 'enzyme';

import App from './App';
import ReadingListContainer from '../ReadingListContainer/ReadingListContainer';

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('renders without crashing', () => {
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.exists()).toBe(true);
  });

  it('renders a ReadingListHOC component', () => {
    const readingListComponent = wrapper.find(ReadingListContainer);
    expect(readingListComponent.exists()).toBe(true);
  });
});
