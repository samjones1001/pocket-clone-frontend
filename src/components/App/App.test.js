import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import moxios from 'moxios';

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

  describe('makes a request to the pocketClone api', () => {
    let wrapper

    beforeEach(() => {
      moxios.install();
      wrapper = mount(<App />);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    describe('on sucess', () => {
      it('retrieves a list of saved articles on page load and stores them in state', (done) => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: [{url: 'example.com'}, {url: 'www.anotherwebsite.com'}]
          }).then(() => {
            expect(wrapper.state().articles.length).toEqual(2)
            done()
          });
        });
      });
    });
  });
})
