import React from 'react';
import { shallow, mount } from 'enzyme';

import { ReadingList } from './ReadingList';
import Article from '../Article/Article';
import Input from '../Input/Input';

describe('ReadingList', () => {
  let wrapper;
  let setInitialState;
  let addToState;
  let deleteFromState;
  let updateState;

  const articles = [
    {id: 1, url: 'www.example.com', title: "Test Title", isRead: false },
    {id: 2, url: 'www.anotherwebsite.com', title: "Test Title 2", isRead: false },
    {id: 3, url: 'www.someothersite.com', title: "Test Title 3", isRead: true }
  ];

  const mockGetRequest = () => {
    return new Promise((resolve, reject) => {
      resolve(articles);
    });
  }

  const mockPostRequest = () => {
    return new Promise((resolve, reject) => {
      resolve()
    });
  }

  const mockDeleteRequest = () => {
    return new Promise((resolve, reject) => {
      resolve()
    });
  }

  const mockPutRequest = () => {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  const flushPromises = () => new Promise(setImmediate);

  beforeEach(() => {
    setInitialState = jest.fn();
    addToState = jest.fn();
    deleteFromState = jest.fn();
    updateState = jest.fn();

    wrapper = mount(
      <ReadingList
        makeGetRequest={ mockGetRequest }
        makePostRequest={ mockPostRequest }
        makeDeleteRequest={ mockDeleteRequest }
        makePutRequest={ mockPutRequest }
        setInitialState={ setInitialState }
        addToState={ addToState }
        deleteFromState={ deleteFromState }
        updateState={ updateState }
        articles={ articles }
      />
    );
  })

  it('renders an Input component', () => {
    const inputComponent = wrapper.find(Input);
    expect(inputComponent.exists()).toBe(true);
  });

  it('retrieves a list of saved articles on page load and renders their details', () => {
    wrapper.update();
    const articleComponents = wrapper.find(".component-article");

    expect(articleComponents.length).toBe(3);
  });

  it('can filter articles to display only unread', () => {
    const filterUnreadButton = wrapper.find('.btn-filter').at(1);
    filterUnreadButton.simulate('click')
    const articleComponents = wrapper.find(".component-article");

    expect(articleComponents.length).toBe(2);
  });

  it('can filter articles to display only read', () => {
    const filterReadButton = wrapper.find('.btn-filter').at(2);
    filterReadButton.simulate('click')
    const articleComponents = wrapper.find(".component-article");

    expect(articleComponents.length).toBe(1);
  });

  it('can POST data and update state', async () => {
    const inputElement = wrapper.find(".input-textfield");
    const buttonElement = wrapper.find(".btn-upload");
    inputElement.simulate('change', { target: { value: '' }});
    buttonElement.simulate('click');

    await flushPromises();

    expect(addToState).toHaveBeenCalled();
  });

  it('can DELETE articles and remove them from state', async () => {
    wrapper.update();
    const buttonElement = wrapper.find(".btn-delete").first();
    buttonElement.simulate('click');

    await flushPromises();

    expect(deleteFromState).toHaveBeenCalled();
  });

  it('can PUT updates to the isRead property of an article in state', async () => {
    wrapper.update()
    const buttonElement = wrapper.find(".btn-mark-read").first();
    buttonElement.simulate('click');

    await flushPromises();

    expect(updateState).toHaveBeenCalled();
  });
});
