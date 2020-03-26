import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';

type EventCardProps = {
    bill: Entity,
    content: {
        date: string,
        name: string,
    }
}

export default function EventCard({content}:any){
    console.log("Event content", content);

    return <div>EventCard</div>;

}