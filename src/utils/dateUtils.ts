import moment from 'moment';

function describeISODate(ISODate: string) {
  let dateDescription = moment(ISODate).fromNow();

  if (dateDescription === 'a day ago') {
    return 'Yesterday';
  } else if (dateDescription.length > 1 && dateDescription.startsWith('a ')) {
    return '1' + dateDescription.slice(1);
  }

  return dateDescription;
}

export { describeISODate };
