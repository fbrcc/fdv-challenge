import React from 'react';
import { Input } from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Input  
        placeholder="Nombre" 
        name="name" 
        type="text" 
        value={"Fermín Breccia"}
            >
        </Input>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });