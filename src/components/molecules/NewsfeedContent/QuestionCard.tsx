import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';
import {Avatar} from '../../atoms';

export type QuestionCardProps = {
    content: {
        askedBy: Entity,
        question: string,
    }
}

export default function QuestionCard({content}:any){
    console.log("Question content", content);
    const {askedBy, question} = content;

    return (
        <div>
            <Avatar image = {askedBy.image} />
            <p><strong>{askedBy.name}</strong> asked <em>"{question}"</em></p>
        </div>
    );
}