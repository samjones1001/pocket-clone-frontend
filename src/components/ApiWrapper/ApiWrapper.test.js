import React from 'react';
import { shallow } from 'enzyme';

import withApiAccess from './ApiWrapper';

describe('ApiWrapper', () => {

  const MockComponent = () => {
    return (
      <div>MockComponent</div>
    );
  }

  it('should render the passed component', () => {
    const WrappedComponent = withApiAccess(MockComponent);
    const wrapper = shallow(<WrappedComponent />);

    expect(wrapper.html()).not.toBe(null);
  });
});
