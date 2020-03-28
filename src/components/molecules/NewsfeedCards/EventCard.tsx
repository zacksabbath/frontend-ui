import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NewsfeedItem} from 'components';
import {Entity} from 'types';

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

export default function EventCard(props:any){

    const {bill, content, ...rest} = props;

    console.log("Event content", content, bill);

    const {date, name} = content;
    return (
        <NewsfeedItem {...rest} bill={bill} >
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
        </NewsfeedItem>
    );

}