import React from 'react';
import styled from 'styled-components';

export const Title = (props) => (
    <Container>
        <H2>{props.text}</H2>
        {props.children}
    </Container>
);

const Container = styled.div`
    text-align: center;
`;

const H2 = styled.h2`
    letter-spacing: 2px;
`;