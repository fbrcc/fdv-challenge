import React from 'react';
import styled from 'styled-components';

export const Flex = (props) => (
    <FlexStyled>{props.children}</FlexStyled>
);

const FlexStyled = styled.div`
    display: flex;
`;