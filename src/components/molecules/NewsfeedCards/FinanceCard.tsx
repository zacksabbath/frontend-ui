import React from 'react';
import { Entity } from '../../../global/types';
import { Avatar, NewsfeedItem } from '../../../components';

export interface IFinanceCard {
  content: {
    politician: Entity;
    acceptedAmount: string;
  };
}

// TODO: Work with Henry to flesh out UI for this card (and thus replay 'any' with better type checking)
export default function FinanceCard(props: any) {
  const { content, ...rest } = props;
  const { politician, acceptedAmount, contributor } = content;
  return (
    <NewsfeedItem {...rest}>
      <Avatar src={politician.image} />
      <p>
        <strong>{politician.name}</strong> accepted {acceptedAmount} from{' '}
        <strong>{contributor}</strong>
      </p>
    </NewsfeedItem>
  );
}
