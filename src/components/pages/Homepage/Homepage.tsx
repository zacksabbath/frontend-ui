import React from 'react'
import styled from 'styled-components';
import {ImageButton} from 'components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContainerWrapper = styled.div`
    .container {
        
        
    }

`;

export default function Homepage(props:any) {
    
    return (
        <div>
            <img src="http://stump.zackrose.net/images/stump_logo.png" style={{marginTop: 80}} />

            {/* <h1>Stump</h1> <FontAwesomeIcon icon="star" size="3x"/>      */}
            <ContainerWrapper className="container">
            <ImageButton text="My Voting Ballot" image="http://stump.zackrose.net/images/voting_ballot.png"/>
            <ImageButton text="Browse Issues" image="http://stump.zackrose.net/images/issues.png"/> 
            </ContainerWrapper>  

            <ImageButton text="News & Activities" image="http://stump.zackrose.net/images/news.png"/>

        </div>
    )
}
