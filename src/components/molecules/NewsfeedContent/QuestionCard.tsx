import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';

export type QuestionCardProps = {
    content: {
        askedBy: Entity,
        question: string,
    }
}

export default function QuestionCard({content}:any){
    console.log("Question content", content);

    return <div>QuestionCard</div>;
}