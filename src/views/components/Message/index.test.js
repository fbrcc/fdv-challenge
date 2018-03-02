import React from 'react';
import { Message } from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Message visitors={[{name: "Fermin", country: "Argentina", date: "1989-09-18"}]} selected={0}></Message>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });