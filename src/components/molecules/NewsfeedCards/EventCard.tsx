import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NewsfeedItem } from '../../../components';
import { Entity } from '../../../global/types';

export interface IEventCard {
  bill: Entity;
  content: {
    date: string;
    name: string;
    // location?: Location Type,
  };
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalendarIcon = styled.div`
  color: ${({ theme }) => theme.background.secondary};
`;

// TODO: Work with Henry to flesh out UI for this card (and thus replay 'any' with better type checking)
export default function EventCard(props: any) {
  const { eventProps, content, ...rest } = props;

  const { date, name } = content;

  return (
    <NewsfeedItem {...rest}>
      <Content>
        <CalendarIcon>
          <FontAwesomeIcon icon={faCalendarAlt} size="4x" />
        </CalendarIcon>
        <div>
          <p>{date}</p>
          <p>{name}</p> */}
          {/* <p>{location}</p> */}
        </div>
      </Content>
    </NewsfeedItem>
  );
}
