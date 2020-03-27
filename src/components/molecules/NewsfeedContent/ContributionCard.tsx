import React from 'react';
import styled from 'styled-components';
import {Entity} from '../../../types';
import {Avatar} from '../../atoms';

export type ContributionCardProps = {
    content: {
        politician: Entity,
        acceptedAmount: string,
        contributor: string,
    }
}

const Main = styled.div`

`;



export default function ContributionCard({content}:any){
    console.log("Contribution content", content);
    const {politician, acceptedAmount, contributor} = content;
    return (
        <Main>
            <Avatar image = {politician.image} />
            <p><strong>{politician.name}</strong> accepted {acceptedAmount} from <strong>{contributor}</strong></p>
        </Main>
    );
}