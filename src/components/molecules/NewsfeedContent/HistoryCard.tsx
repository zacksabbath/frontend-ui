import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';

export type HistoryCardProps = {
    content: {
        politician: Entity,
        blurb: string,
    }
}

export default function HistoryCard({content}:any){
    console.log("History content", content);
    return <div>HistoryCard</div>
}