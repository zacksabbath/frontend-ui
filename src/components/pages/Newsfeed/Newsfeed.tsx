import React from 'react';
import {ThemeProvider} from 'styled-components';
import {cardTypes, getCardTheme} from 'theme';
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
    newsfeedItems?: NewsfeedItemProps[]
};

// const NewsFeedItems = styled.div`
//     /* styles applying to the list would go here */
// `;

function getComponent( newsfeedItemProps: any ) {
    const {type} = newsfeedItemProps;
    switch(type) {
        case 'event': return <EventCard {...newsfeedItemProps} />
        case 'contribution': return <ContributionCard {...newsfeedItemProps}/>;
        case 'history': return <HistoryCard {...newsfeedItemProps}/>;
        case 'news': return <NewsCard {...newsfeedItemProps}/>;
        case 'question': return <QuestionCard {...newsfeedItemProps}/>;
        case 'vote': return <VoteCard {...newsfeedItemProps} />;
        default: return <div>Card Error... Type: {type}</div>;
    };
}

                    

export default function NewsFeed(props: NewsfeedProps) {
    const {newsfeedItems} = props;

    return <>
        {newsfeedItems?.map(item=>{
            const {key, type, ...newsfeedItemProps} = item;

            // const cardTheme: Object = cardThemes[type] || {};

            const nestedTheme = (currentTheme: Object) => ({
                ...currentTheme,
                cardTheme: getCardTheme(type),
              });

            // const FeedComponent: JSX.Element = GetNewsFeedComponent(type)

            // const [$feedElement, colorScheme] = getComponent(type, content);

            return (
                <ThemeProvider theme = {nestedTheme} key={key}>
                    {getComponent(item)}
                </ThemeProvider>
            );
            
            
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