import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';

type VoteCardProps = {
    content: {
        politician: Entity,
        vote: string,
    }
}

export default function VoteCard({content}:VoteCardProps){
    console.log("Vote content", content);
    return <div style={{color:'black'}}>VoteCard</div>
}