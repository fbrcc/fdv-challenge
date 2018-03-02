import React from 'react';
import styled from 'styled-components';

export const Layout = (props) => (
    <ContainerStyled>
        {props.children}
    </ContainerStyled>
);

const ContainerStyled = styled.div`
    position: relative;
    height: calc(100vh - 50px);
    width: calc(100% - 50px);
    padding: 25px;
    overflow-y: auto;
    overflow-x: hidden;
`;