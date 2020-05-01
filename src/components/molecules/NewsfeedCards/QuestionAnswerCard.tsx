import React from 'react';
import { Entity } from '../../../global/types';
import { Avatar, NewsfeedItem, Clickable } from '../../../components';

export type QuestionAnswerCardProps = {
  content: {
    askedBy: Entity;
    question: string;
  };
};

export default function QuestionAnswerCard(props: any) {
  //Question or answer
  const { content, ...rest } = props;
  const { askedBy, question } = content;

  return (
    <NewsfeedItem {...rest}>
      <Avatar src={askedBy.image} />
      <p>
        <Clickable>{askedBy.name}</Clickable> asked <em>"{question}"</em>
      </p>
    </NewsfeedItem>
  );
}
