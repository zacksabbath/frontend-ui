import React from 'react'
import styled from 'styled-components';
import {ImageButton} from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const text = styled.p`
//     position: absolute;
// `;

export default function Homepage(props:any) {
    
    return (
        <>
            <h1>Stump</h1>
        
            <ImageButton >
                <h2>My Voting<br/> Ballot</h2>
            </ImageButton>
            <ImageButton >
                <h2>Browse Issues</h2>
            </ImageButton>
            <ImageButton>
                <h2> News & Activities</h2>
            </ImageButton>
        </>
    )
}
