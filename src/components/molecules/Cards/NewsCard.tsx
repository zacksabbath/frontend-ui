import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    .card-heading {
        font-weight: medium;
        text-align: left;
        /* font-family: GalanoGrotesque-Medium;*/
        font-size: 20px;
        color: #FFFFFF;
        line-height: 26px;
    }

    .news-source {
        font-weight: semibold;
        /* font-family: GalanoGrotesque-SemiBold;*/
        font-size: 14px;
        color: #A082E3;
        padding-bottom: 10px;
    }
`

export default function NewsCard(){

    return (
        <Card>
            <div className="news-source">
                The Denver Channel
            </div>

            <div className="card-heading">
                Colorado State Senate Advances Death Penalty Repeal Bill
            </div>
        </Card>
)
}