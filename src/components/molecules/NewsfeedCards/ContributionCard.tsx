import React from 'react';
import {Entity} from 'types';
import {Avatar, NewsfeedItem} from 'components';

export type ContributionCardProps = {
    content: {
        politician: Entity,
        acceptedAmount: string,
        contributor: string,
    }
}

export default function ContributionCard(props:any){
    const { content, ...rest } = props;
    console.log("Contribution content", content);
    const {politician, acceptedAmount, contributor} = content;
    return (
        <NewsfeedItem {...rest} >
            <Avatar image = {politician.image} />
            <p><strong>{politician.name}</strong> accepted {acceptedAmount} from <strong>{contributor}</strong></p>
        </NewsfeedItem>
    );
}