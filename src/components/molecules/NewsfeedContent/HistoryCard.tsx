import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';

type HistoryCardProps = {
    content: {
        politician: Entity,
        blurb: string,
    }
}

export default function HistoryCard({content}:HistoryCardProps){
    console.log("History content", content);
    return <div>HistoryCard</div>
}