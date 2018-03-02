import React from 'react';
import styled from 'styled-components';

import moment from 'moment';

export const List = (props) => (
    <div>
        {props.visitors.length === 0 && 
            <p>No hay datos</p>
        }
        {props.visitors && props.visitors.map((visitor, i) => (
            <Link onClick={(e) => props.onSelect(i)} key={i}>{visitor.name} - {visitor.country} - {moment(visitor.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Link>
        ))}
    </div>
);

const Link = styled.p`
    padding: 15px;
    background-color: #FFFFFF;
    border: solid thin #BDBDBD;
    cursor: pointer;
    margin: 5px 0;
`;