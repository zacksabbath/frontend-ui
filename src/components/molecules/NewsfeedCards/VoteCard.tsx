import React from 'react';
import {Entity} from 'global/types';
import styled from 'styled-components';
import {Avatar, NewsfeedItem} from 'components';

export type VoteCardProps = {
    content: {
        politician: Entity,
        vote: string,
    }
}


//creator


//support or oppose

//bill title
export default function VoteCard(props:any){
    const { content, ...rest } = props;

    const {politician, vote} = content;
    return (
        <NewsfeedItem {...rest} >
            <Avatar image={politician.image} />
            <p><strong>{politician.name}</strong> voted to <strong>{vote}</strong></p>
        </NewsfeedItem>
        )
}