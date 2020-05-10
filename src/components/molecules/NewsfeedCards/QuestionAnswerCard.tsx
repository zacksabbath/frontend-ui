import React from 'react';
import { Entity } from '../../../global/types';
import { Avatar, NewsfeedItem, Clickable } from '../../../components';

export interface IQuestionAnswerCard {
  content: {
    askedBy: Entity;
    question: string;
  };
}

// TODO: Work with Henry to flesh out UI for this card (and thus replay 'any' with better type checking)
export default function QuestionAnswerCard(props: any) {
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
