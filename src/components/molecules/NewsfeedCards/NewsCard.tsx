import React from 'react';
import styled from 'styled-components';
import {NewsfeedItem} from 'components';

const Main = styled.div`
    .card-heading {
        font-weight: medium;
        text-align: left;
        /* font-family: GalanoGrotesque-Medium;*/
        font-size: 20px;
        color: ${({theme})=> theme.cardTheme?.primaryText};
        line-height: 26px;
    }

    .news-source {
        font-weight: semibold;
        /* font-family: GalanoGrotesque-SemiBold;*/
        font-size: 14px;
        color: ${({theme})=> theme.cardTheme?.secondaryText}; /* #A082E3;*/
        padding-bottom: 10px;
    }
`;

export type NewsCardProps = {
    content: {
        source: string,
        heading: string,
    }
};

export default function NewsCard(props:any){
    const { content, ...rest } = props;
    const { heading, source } = content;

    return (
        <NewsfeedItem {...rest} >
            <Main>
                <div className="news-source">
                    {source}
                </div>

                <div className="card-heading">
                    {heading}
                </div>
            </Main>
        </NewsfeedItem>
    );
};