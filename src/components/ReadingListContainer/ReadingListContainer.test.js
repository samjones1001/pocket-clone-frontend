import React from 'react';
import { shallow, mount } from 'enzyme';
import moxios from 'moxios';

import ReadingListContainer from './ReadingListContainer';
import ReadingList from '../ReadingList/ReadingList';


describe("ReadingListContainer", () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ReadingListContainer />);
    const rlhocComponent = wrapper.find("[data-test='component-reading-list-container']");
    expect(rlhocComponent.exists()).toBe(true);
  });

  it('renders a ReadingList component', () => {
    const wrapper = shallow(<ReadingListContainer />);
    const readingListComponent = wrapper.find(ReadingList);
    expect(readingListComponent.exists()).toBe(true);
  });

  describe('makes requests to the pocketClone api', () => {
    let wrapper

    beforeEach(() => {
      moxios.install();
      wrapper = mount(<ReadingListContainer />);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    describe('on sucess', () => {
      it('GET retrieves a list of saved articles on page load and stores them in state', (done) => {
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

      it('POST creates a new article and saves it in state', (done) => {
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
