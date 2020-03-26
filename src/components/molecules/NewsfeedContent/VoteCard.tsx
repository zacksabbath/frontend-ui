import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';

export type VoteCardProps = {
    content: {
        politician: Entity,
        vote: string,
    }
}

export default function VoteCard({content}:any){
    console.log("Vote content", content);
    return <div style={{color:'black'}}>VoteCard</div>
}