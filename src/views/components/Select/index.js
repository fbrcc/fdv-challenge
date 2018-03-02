import React from 'react';
import styled from 'styled-components';

export const Select = (props) => (
    <SelectStyled name={props.name} value={props.value} onChange={(e) => props.handleChange(e, e.currentTarget.name, e.currentTarget.value)}>
        <option value="">País</option>
        {props.countries && props.countries.map(country => (
            <option value={country.name} key={country.alpha2Code}>{country.name}</option>
        ))}
    </SelectStyled>
)

const SelectStyled = styled.select`
    width: 100%;
    height: 40px;
    border: solid thin #BDBDBD;
    padding: 0 15px;
    color: #2E2E2E;
    letter-spacing: 1px;
    margin-top: 15px;
`;