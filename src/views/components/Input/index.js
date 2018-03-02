import React from 'react';
import styled from 'styled-components';

export const Input = (props) => (
    <InputStyled 
        name={props.name} 
        type={props.type} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={(e) => props.handleChange(e, e.currentTarget.name, e.currentTarget.value)}
        pattern={props.pattern} />
);

const InputStyled = styled.input`
    width: calc(100% - 30px);
    height: 40px;
    border: solid thin #BDBDBD;
    padding: 0 15px;
    color: #2E2E2E;
    letter-spacing: 1px;
    margin-top: 15px;

    &:first-child {
        margin: 0;
    }
`;