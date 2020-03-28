import React from 'react';
// import styled from 'styled-components';
import {Entity} from 'types';
import {Avatar, NewsfeedItem} from 'components';

export type QuestionCardProps = {
    content: {
        askedBy: Entity,
        question: string,
    }
}

export default function QuestionCard(props:any){
    const { content, ...rest } = props;
    console.log("Question content", content);
    const {askedBy, question} = content;

    return (
        <NewsfeedItem {...rest} >
            <Avatar image = {askedBy.image} />
            <p><strong>{askedBy.name}</strong> asked <em>"{question}"</em></p>
        </NewsfeedItem>
    );
}