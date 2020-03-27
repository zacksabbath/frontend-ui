import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';
import {Avatar} from '../../atoms';

export type VoteCardProps = {
    content: {
        politician: Entity,
        vote: string,
    }
}

export default function VoteCard({content}:any){
    console.log("Vote content", content);
    const {politician, vote} = content;
    return (
        <div style={{color:'black'}}>
            <Avatar image={politician.image} />
            <p><strong>{politician.name}</strong> voted to <strong>{vote}</strong></p>
        </div>
        )
}