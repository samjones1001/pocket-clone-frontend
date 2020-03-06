import React from 'react';
import { shallow, mount } from 'enzyme';

import { ReadingList } from './ReadingList';
import Article from '../Article/Article';
import Input from '../Input/Input';

describe('ReadingList', () => {
  let wrapper;
  const articles = [
    {id: 1, url: 'www.example.com'},
    {id: 2, url: 'www.anotherwebsite.com'},
    {id: 3, url: 'www.someothersite.com'}
  ];

  const mockGetRequest = () => {
    return new Promise((resolve, reject) => {
      resolve(articles);
    });
  }

  const mockPostRequest = () => {
    return new Promise((resolve, reject) => {
      resolve({id: 4, url: 'www.anothersite.com'})
    });
  }

  const mockDeleteRequest = () => {
    return new Promise((resolve, reject) => {
      resolve({id: 1, url: 'www.example.com'})
    });
  }

  const mockPutRequest = () => {
    return new Promise((resolve, reject) => {
      resolve({id: 1, url: 'www.example.com'})
    })
  }

  const flushPromises = () => new Promise(setImmediate);

  beforeEach(() => {
    wrapper = mount(
      <ReadingList
        makeGetRequest={ mockGetRequest }
        makePostRequest={ mockPostRequest }
        makeDeleteRequest={ mockDeleteRequest }
        makePutRequest={ mockPutRequest }
      />
    );
  })

  it('renders without crashing', () => {
    const readingListComponent = wrapper.find(".component-reading-list");
    expect(readingListComponent.exists()).toBe(true);
  });

  it('renders an Input component', () => {
    const inputComponent = wrapper.find(Input);
    expect(inputComponent.exists()).toBe(true);
  });

  describe('makes requests to the pocketClone api', () => {
    describe('on sucess', () => {
      it('GET retrieves a list of saved articles on page load and renders their details', () => {
        wrapper.update();
        const articleComponents = wrapper.find(".component-article");

        expect(articleComponents.length).toBe(3);
      });

      it('POST creates a new article and renders its details', async () => {
        const inputElement = wrapper.find(".input-textfield");
        const buttonElement = wrapper.find(".btn-add");
        inputElement.simulate('change', { target: { value: '' }});
        buttonElement.simulate('click');

        await flushPromises();
        wrapper.update();

        const articleComponents = wrapper.find(".component-article");
        expect(articleComponents.length).toBe(4);
      });

      it('DELETE removes an article from the rendered list', async () => {
        wrapper.update();
        const buttonElement = wrapper.find(".btn-delete").first();
        buttonElement.simulate('click');

        await flushPromises();
        wrapper.update();

        const articleComponents = wrapper.find(".component-article");
        expect(articleComponents.length).toBe(2);
      });

      it('PUT updates the isRead property of an article', async () => {
        wrapper.update()
        const buttonElement = wrapper.find(".btn-mark-read").first();
        buttonElement.simulate('click');

        await flushPromises();
        wrapper.update();

        const markUnreadButtonElements = wrapper.find(".btn-mark-unread");
        expect(markUnreadButtonElements.length).toBe(1);
      });
    });
  });
});
