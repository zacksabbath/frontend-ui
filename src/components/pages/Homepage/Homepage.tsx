import React from 'react'
import styled from 'styled-components';
import {ImageButton} from 'components';

export default function Homepage(props:any) {
    
    return (
        <div className="homepage-main">
            <ImageButton >
                <h2>My Voting Ballot</h2>
            </ImageButton>
            <div className="homepage-A2">
                <h2>Browse Issues</h2>
            </div>
            <div className="homepage-B">
                <h2> News & Activities</h2>
            </div>
        </div>
    )
}
