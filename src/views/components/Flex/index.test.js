import React from 'react';
import { Flex } from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Flex></Flex>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });