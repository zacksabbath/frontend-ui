import React from 'react';
import { Entity } from '../../../global/types';
import { Avatar, NewsfeedItem } from '../../../components';

export interface IVoteCard {
  content: {
    politician: Entity;
    vote: string;
  };
}

// TODO: Work with Henry to flesh out UI for this card (and thus replay 'any' with better type checking)
export default function VoteCard(props: any) {
  const { content, ...rest } = props;

  const { politician, vote } = content;
  return (
    <NewsfeedItem {...rest}>
      <Avatar src={politician.image} />
      <p>
        <strong>{politician.name}</strong> voted to <strong>{vote}</strong>
      </p>
    </NewsfeedItem>
  );
}
