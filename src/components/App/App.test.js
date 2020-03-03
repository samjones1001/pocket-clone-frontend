import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import moxios from 'moxios';

import App from './App';
import ReadingList from '../ReadingList/ReadingList';
import Input from '../Input/Input';

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

  it('renders an Input component', () => {
    const wrapper = shallow(<App />);
    const inputComponent = wrapper.find(Input);
    expect(inputComponent.exists()).toBe(true);
  });

  it('updates state on change in search component', () => {
    const wrapper = mount(<App />);
    const newValue = "testing component";
    const inputElement = wrapper.find("[data-test='input-textfield']")

    inputElement.simulate('change', { target: { value: newValue }});
    expect(wrapper.state().urlToAdd).toEqual(newValue);
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
