import moment from 'moment';

function describeISODate(ISODate: string) {
    let dateDescription = moment(ISODate).fromNow();

    if (dateDescription === 'a day ago') {
        return 'Yesterday';
    }

    return dateDescription;
}

export { describeISODate };