import React from 'react';
import { shallow, mount } from 'enzyme';
import moxios from 'moxios';

import ReadingListHOC from './ReadingListHOC';
import ReadingList from '../ReadingList/ReadingList';


describe("ReadingListHOC", () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ReadingListHOC />);
    const rlhocComponent = wrapper.find("[data-test='component-reading-list-hoc']");
    expect(rlhocComponent.exists()).toBe(true);
  });

  it('renders a ReadingList component', () => {
    const wrapper = shallow(<ReadingListHOC />);
    const readingListComponent = wrapper.find(ReadingList);
    expect(readingListComponent.exists()).toBe(true);
  });

  describe('makes GET requests to the pocketClone api', () => {
    let wrapper

    beforeEach(() => {
      moxios.install();
      wrapper = mount(<ReadingListHOC />);
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

  describe('makes POST requests to the pocketClone api', () => {
    let wrapper

    beforeEach(() => {
      moxios.install();
      wrapper = mount(<ReadingListHOC />);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    describe('on sucess', () => {
      it('retrieves a list of saved articles on page load and stores them in state', (done) => {
        moxios.wait(() => {
          const request = moxios.requests.at(0);
          request.respondWith({
            status: 200,
            response: [{url: 'example.com'}, {url: 'www.anotherwebsite.com'}]
          })
        });

        const inputElement = wrapper.find("[data-test='input-textfield']");
        const buttonElement = wrapper.find("[data-test='input-button']");

        inputElement.simulate('change', { target: { value: '' }});
        buttonElement.simulate('click');

        moxios.wait(() => {
          const request = moxios.requests.at(1);
          request.respondWith({
            status: 200,
            response: [{data: {url: 'www.yetanotherwebsite.com'}}]
          }).then(() => {
            expect(wrapper.state().articles.length).toEqual(3)
            done()
          });
        });
      });
    });
  });
});
