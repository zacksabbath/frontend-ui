import React from 'react';
import styled from 'styled-components';

type NewsFeedProps = {
    newsFeedItems: Array<Object>
}

const NewsFeedItems = styled.div`
    /* styles applying to the list would go here */
`;

// const renderNewsFeedItem = (newsFeedItem) => {
//     const {type, ...props} = newsFeedItem;
//     switch (newsFeedItem.type) {
//         case ''
//     }
// }

export default function NewsFeed() {
    // const {newsFeedItems} = props;

    // return <NewsFeedItems>
    //     {}
    // </NewsFeedItems>
    return <div />;
}