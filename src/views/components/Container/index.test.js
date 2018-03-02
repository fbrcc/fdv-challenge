import React from 'react';
import { Container } from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Container title="Ingrese sus datos"></Container>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });