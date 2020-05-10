import React from 'react';
import { Entity } from '../../../global/types';
import { Avatar, NewsfeedItem } from '../../../components';

export interface IHistoryCard {
  content: {
    politician: Entity;
    blurb: string;
  };
}

// TODO: Work with Henry to flesh out UI for this card (and thus replay 'any' with better type checking)
export default function HistoryCard(props: any) {
  const { content, ...rest } = props;

  const { politician, blurb } = content;
  return (
    <NewsfeedItem {...rest}>
      <Avatar src={politician.image} />
      <p>
        <strong>{politician.name}</strong> {blurb}
      </p>
    </NewsfeedItem>
  );
}
