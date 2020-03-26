import ContributionCard, {ContributionCardProps} from './ContributionCard';
import EventCard, {EventCardProps} from './EventCard';
import HistoryCard, {HistoryCardProps} from './HistoryCard';
import NewsCard, {NewsCardProps} from './NewsCard';
import QuestionCard, {QuestionCardProps} from './QuestionCard';
import VoteCard, {VoteCardProps} from './VoteCard';

export {
    ContributionCard,
    EventCard,
    HistoryCard,
    NewsCard,
    QuestionCard,
    VoteCard,
}

// export type {
//     ContributionCardProps,
//     EventCardProps,
//     HistoryCardProps,
//     NewsCardProps,
//     QuestionCardProps,
//     VoteCardProps,
// }

// type MapType = {
//         'contribution': ReactNode,
//         'event': ReactNode,
//         'history': ReactNode,
//         'news': ReactNode,
//         'question': ReactNode,
//         'vote': ReactNode,
// };



// export const NewsfeedCardMap = {
//     'contribution': ContributionCard,
//     'event': EventCard,
//     'history': HistoryCard,
//     'news': NewsCard,
//     'question': QuestionCard,
//     'vote': VoteCard,
// };

// export const GetNewsFeedComponent = (type: TypeOptions):JSX.Element => NewsfeedCardMap[type];