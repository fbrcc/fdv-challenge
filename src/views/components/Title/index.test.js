import React from 'react';
import { Title } from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Title text="Ejercicio Intive"></Title>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });