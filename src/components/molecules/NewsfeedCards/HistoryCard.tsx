import React from 'react';
import {Entity} from 'global/types';
import {Avatar, NewsfeedItem} from 'components';

export type HistoryCardProps = {
    content: {
        politician: Entity,
        blurb: string,
    }
}

export default function HistoryCard(props:any){
    const {content, ...rest} = props

    const {politician, blurb} = content;
    return (
        <NewsfeedItem {...rest} >
            <Avatar image={politician.image} />
            <p><strong>{politician.name}</strong> {blurb}</p>
        </NewsfeedItem>
    );
}