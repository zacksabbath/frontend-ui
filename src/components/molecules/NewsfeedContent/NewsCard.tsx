import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    .card-heading {
        font-weight: medium;
        text-align: left;
        /* font-family: GalanoGrotesque-Medium;*/
        font-size: 20px;
        color: ${({theme})=> theme.primaryText};
        line-height: 26px;
    }

    .news-source {
        font-weight: semibold;
        /* font-family: GalanoGrotesque-SemiBold;*/
        font-size: 14px;
        color: ${({theme})=> theme.secondaryText}; /* #A082E3;*/
        padding-bottom: 10px;
    }
`;

export type NewsCardProps = {
    content: {
        source: string,
        heading: string,
    }
};

export default function NewsCard({content}:any){

    const {heading, source} = content;

    return (
        <Card>
            <div className="news-source">
                {source}
            </div>

            <div className="card-heading">
                {heading}
            </div>
        </Card>
    );
};