import React from 'react'
import styled from 'styled-components';
import {ImageButton} from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const text = styled.div`
//     position: absolute;
// `;

export default function Homepage(props:any) {
    
    return (
        <div>
            <h1>Stump</h1> <FontAwesomeIcon icon="star" size="3x"/>     
            <ImageButton text="My Voting Ballot" image="http://stump.zackrose.net/images/voting_ballot.png"/>
            <ImageButton text="Browse Issues" image="http://stump.zackrose.net/images/issues.png"/>    
            <ImageButton text="News & Activities" image="http://stump.zackrose.net/images/news.png"/>

        </div>
    )
}
