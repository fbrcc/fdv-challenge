import React from 'react';
import { Select } from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Select name="country" countries={[{name:"Argentina", alpha2code:"AR"}, {name:"Brazil", alpha2code:"BR"}]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


