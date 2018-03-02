import React from 'react';
import styled from 'styled-components';

import moment from 'moment';

export const Message = (props) => (
    <div>
        {props.visitors.length !== 0 && 
            <MessageStyled>Hola {props.visitors[props.selected].name} de {props.visitors[props.selected].country}. Hoy es día {moment().format('DD')} del mes {moment().format('MM')} y tenes {moment().diff(moment(props.visitors[props.selected].date), 'years')} años.</MessageStyled>
        }
    </div>
);

const MessageStyled = styled.p`
    position: absolute;
    bottom: 0;
    margin: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 30px;
    background-color: #58ACFA;
    color: #FFFFFF;
    font-weight: 600;
`;