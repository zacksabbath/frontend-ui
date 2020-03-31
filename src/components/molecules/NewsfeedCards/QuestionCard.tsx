import React from 'react';
import {Entity} from 'global/types';
import {Avatar, NewsfeedItem, Clickable} from 'components';

export type QuestionCardProps = {
    content: {
        askedBy: Entity,
        question: string,
    }
}

export default function QuestionCard(props:any){
    const { content, ...rest } = props;
    const { askedBy, question } = content;

    return (
        <NewsfeedItem {...rest} >
            <Avatar image = {askedBy.image} />
            <p><Clickable>{askedBy.name}</Clickable> asked <em>"{question}"</em></p>
        </NewsfeedItem>
    );
}