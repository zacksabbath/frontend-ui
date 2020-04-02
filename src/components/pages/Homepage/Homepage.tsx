import React from 'react'
// import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

const Homepage-A1 = styled.div`
    border-radius: 50px;    
`;





export default function Homepage(props:any) {
    
    return (
        <div className="homepage-main">
            <Homepage-A1>
                <h2>My Voting Ballot</h2>
            </Homepage-A1>
            <div className="homepage-A2">
                <h2>Browse Issues</h2>
            </div>
            <div className="homepage-B">
                <h2> News & Activities</h2>
            </div>
        </div>
    )
}
