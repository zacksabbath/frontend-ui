import React from 'react';
// import styled, {ThemeProvider} from 'styled-components';
// import  * as NewsFeedContent from 'components'; //{ GetNewsFeedComponent, TypeOptions }

import {
    EventCard,
    ContributionCard,
    HistoryCard,
    NewsCard,
    QuestionCard,
    VoteCard,
    // TypeOptions,
    // NewsfeedItem,
} from 'components';


import {NewsfeedItemProps} from 'components/molecules/NewsfeedItem/NewsfeedItem';

interface NewsfeedProps {
    newsfeedItems: Array<NewsfeedItemProps>
};

// const NewsFeedItems = styled.div`
//     /* styles applying to the list would go here */
// `;

function getComponent( newsfeedItemProps: NewsfeedItemProps ) {
    const {type} = newsfeedItemProps;
    switch(type) {
        case 'event': return <EventCard {...newsfeedItemProps} />
        case 'contribution': return <ContributionCard {...newsfeedItemProps}/>;
        case 'history': return <HistoryCard {...newsfeedItemProps}/>;
        case 'news': return <NewsCard {...newsfeedItemProps}/>;
        case 'question': return <QuestionCard {...newsfeedItemProps}/>;
        case 'vote': return <VoteCard {...newsfeedItemProps} />;
        default: return <div />;
    };
}

                    

export default function NewsFeed(props: NewsfeedProps) {
    const {newsfeedItems} = props;

    return <>
        {newsfeedItems.map(item=>{
            const {key, ...newsfeedItemProps} = item;

            // const FeedComponent: JSX.Element = GetNewsFeedComponent(type)

            // const [$feedElement, colorScheme] = getComponent(type, content);

            return  getComponent(newsfeedItemProps);
            
            
            // (

            //     { getComponent(type:any, content:any) }
                
            //     // <ThemeProvider theme={colorScheme} key={key}>
            //     //     <NewsfeedItem
            //     //         topic = {topic}
            //     //         bill = {bill}
            //     //         type = {type} 
            //     //         image = {image}
            //     //         date = {date}
            //     //         content = {content}
            //     //         >
            //     //             { $feedElement }
            //     //     </NewsfeedItem>
            //     // </ThemeProvider>


            // );
        })}
    </>;
}