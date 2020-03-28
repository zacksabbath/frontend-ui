import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Entity} from '../../../types';

export type EventCardProps = {
    bill: Entity,
    content: {
        date: string,
        name: string,
    }
}

const Main = styled.div`
    display: flex;
    flex-direction: row;
    .calendar-icon {
        color: ${({theme})=> theme.secondary};
    }
`;

export default function EventCard({bill, content}:any){
    console.log("Event content", content, bill);

    const {date, name} = content;
    return (
        <Main>
            <div className="calendar-icon">
                <FontAwesomeIcon icon="calendar-alt" size="4x"/>
            </div>
            <div>
                <p>{date}</p>
                <p>{name}</p>
                <p>{bill?.name}</p>
            </div>

        </Main>
    );

}