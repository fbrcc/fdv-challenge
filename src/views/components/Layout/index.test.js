import React from 'react';
import { Layout } from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Layout></Layout>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });