import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';
import {Avatar} from '../../atoms';

export type HistoryCardProps = {
    content: {
        politician: Entity,
        blurb: string,
    }
}

export default function HistoryCard({content}:any){
    console.log("History content", content);
    const {politician, blurb} = content;
    return (
        <div>
            <Avatar image={politician.image} />
            <p><strong>{politician.name}</strong> {blurb}</p>
        </div>
    );
}