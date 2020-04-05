import React from 'react';
import { Entity } from 'global/types';
import { Avatar, NewsfeedItem } from 'components';

export type FinanceCardProps = {
  content: {
    politician: Entity;
    acceptedAmount: string;
  };
};

export default function FinanceCard(props: any) {
  const { content, ...rest } = props;
  const { politician, acceptedAmount, contributor } = content;
  return (
    <NewsfeedItem {...rest}>
      <Avatar image={politician.image} />
      <p>
        <strong>{politician.name}</strong> accepted {acceptedAmount} from{' '}
        <strong>{contributor}</strong>
      </p>
    </NewsfeedItem>
  );
}
