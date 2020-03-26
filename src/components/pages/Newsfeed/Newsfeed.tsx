import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import  * as NewsFeedContent from '../../molecules/NewsfeedContent'; //{ GetNewsFeedComponent, TypeOptions }

import { NewsfeedItem } from '../../organisms';

import { TypeOptions, NewsfeedItem as NewsFeedItemType } from '../../../types';

import { cardThemes } from '../../../style/colors';


interface NewsfeedProps {
    newsfeedItems: Array<any>
};

const NewsFeedItems = styled.div`
    /* styles applying to the list would go here */
`;

// const renderNewsFeedItem = (newsFeedItem) => {
//     const {type, ...props} = newsFeedItem;
//     switch (newsFeedItem.type) {
//         case ''
//     }
// }
function getComponent(
    type: TypeOptions, content: Object
    ) {
    // switch(type) {
    //     case 'event': return NewsFeedContent.EventCard;
    //     case 'contribution': return NewsFeedContent.ContributionCard;
    //     case 'history': return NewsFeedContent.HistoryCard;
    //     case 'news': return NewsFeedContent.NewsCard;
    //     case 'question': return NewsFeedContent.QuestionCard;
    //     default: return <div />;
    // }


    switch(type) {
        case 'event': return [<NewsFeedContent.EventCard content={content} />, cardThemes.event];
        case 'contribution': return [<NewsFeedContent.ContributionCard content={content}/>, cardThemes.contribution];
        case 'history': return [<NewsFeedContent.HistoryCard content={content}/>, cardThemes.history];
        case 'news': return [<NewsFeedContent.NewsCard content={content}/>, cardThemes.news];
        case 'question': return [<NewsFeedContent.QuestionCard content={content}/>, cardThemes.question];
        case 'vote': return [<NewsFeedContent.VoteCard content={content} />, cardThemes.vote]
        default: return [<div />, cardThemes.vote]
    };
}

                    

export default function NewsFeed(props: NewsfeedProps) {
    const {newsfeedItems} = props;

    return <>
        {newsfeedItems.map(item=>{
            const {type, topic, image, content, date, key} = item;

            // const FeedComponent: JSX.Element = GetNewsFeedComponent(type)

            const [$feedElement, colorScheme] = getComponent(type, content);

            return (
                <ThemeProvider theme={colorScheme} key={key}>
                    <NewsfeedItem
                        topic = {topic} 
                        type = {type} 
                        image = {image}
                        date = {date}
                        content = {content}
                        >
                            { $feedElement }
                    </NewsfeedItem>
                </ThemeProvider>
            );
        })}
    </>;
}