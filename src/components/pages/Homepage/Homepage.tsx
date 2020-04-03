import React from 'react'
import styled from 'styled-components';
import { ImageButton } from 'components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContainerWrapper = styled.div`
    .logo img { 
        width: 50%;
        margin: 80px;        
    }
`;

export default function Homepage(props:any) {
    
    return (
        <div>
            <ContainerWrapper>
                <div className="logo">
            <img src="http://stump.zackrose.net/images/stump_logo.png" />
                </div>
                <div className="top" >
                    <ImageButton text="My Voting Ballot" image="http://stump.zackrose.net/images/voting_ballot.png" />                  
                    <ImageButton text="Browse Issues" image="http://stump.zackrose.net/images/issues.png"/> 
                </div>
            </ContainerWrapper>
            <ImageButton text="News & Activities" image="http://stump.zackrose.net/images/news.png"/>
        </div>
    )
};
