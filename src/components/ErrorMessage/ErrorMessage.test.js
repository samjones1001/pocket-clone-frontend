import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './ErrorMessage';

describe("ErrorMessage", () => {
  it('renders an error using the passed message', () => {
    const wrapper = shallow(<ErrorMessage errorType="loading the page"/>);
    const messageText = wrapper.find(".message-text");
    expect(messageText.text()).toBe("Something went wrong while loading the page. Please try again later");
  });
});
