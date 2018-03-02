import React from 'react';
import styled from 'styled-components';

export const Container = (props) => (
    <Box>
        <H4>{props.title}</H4>
        {props.children}
    </Box>
);

const Box = styled.div`
    width: 100%;
    margin-top: 5em;
    padding: 5em;
`;

const H4 = styled.h4`
    margin-top: 0;
`;