import React from 'react'
import styled from 'styled-components';
import {ImageButton} from 'components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const ContainerWrapper = styled.div`


// `;

export default function Homepage(props:any) {
    
    return (
        <div>
            <img src="http://stump.zackrose.net/images/stump_logo.png" style={{margin: 80}} />
            <ImageButton text="My Voting Ballot" image="http://stump.zackrose.net/images/voting_ballot.png"/>
            <ImageButton text="Browse Issues" image="http://stump.zackrose.net/images/issues.png"/> 
            <ImageButton text="News & Activities" image="http://stump.zackrose.net/images/news.png"/>

        </div>
    )
}
