import React from 'react';
import styled from 'styled-components';

export const Button = (props) => (
    <ButtonStyled disabled={props.disabled} onClick={props.submit}>{props.children}</ButtonStyled>
);

const ButtonStyled = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    background-color: ${props => props.disabled ? "#A9D0F5" : "#58ACFA"};
    color: #FAFAFA;
    letter-spacing: 1px;
    margin-top: 15px;
`;