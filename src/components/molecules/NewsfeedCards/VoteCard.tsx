import React from 'react';
import { Avatar, NewsfeedItem, IEntity } from '../../../components';

export interface IVoteCard {
  content: {
    politician: IEntity;
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
