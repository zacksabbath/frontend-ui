export default [
    {
        type: 'news',
        topic: {
            name: 'Death Penalty',
            id: 2
        },
        image: 'http://stump.zackrose.net/images/press_capital.png',

        content: {
            heading: 'Colorado State Advances Death Penalty Repeal Bill',
            source: 'The Denver Channel',
        },
        date: 'Yesterday',
        key: 'newsFeed1',
    },
    {
        type: 'question',
        topic: {
            name: 'Coronavirus',
            id: 5
        },
        content: {
            askedBy: {
                name: 'Bridget Miller',
                id: 3,
            },
            question: 'How long will bars and restaurants be shut down for during the COVID-19 epidemic?'
        },
        date: 'Yesterday',
        key: 'NewsFeed2',
    },
    {
        type: 'contribution',
        topic: {
            name: 'Fracking',
            id: 15,
        },
        content: {
            politician: {
                name: 'Sen J. Gonzalez',
                id: 45,
                image: 'http://stump.zackrose.net/images/avatar1.png',
            },
            acceptedAmount: '$200,000',
            contributor: 'Extraction Industries',
        },
        date: 'Yesterday',
        key: 'newsFeed3',

    },
    {
        type: 'vote',
        topic: {
            name: 'Fracking',
            id: 15,
        },
        bill: {
            name: 'HB-1090',
            id: 10,
        },
        content: {
            politician: {
                name: 'Sen J. Gonzalez',
                id: 45,
                image: 'http://stump.zackrose.net/images/avatar1.png',
            },
            vote: 'support local control over fracking.'
        },
        date: 'Yesterday',
        key: 'newsFeed4',
    },
    {
        type: 'history',
        topic: {
            name: 'Fracking',
            id: 15,
        },
        content: {
            politician: {
                name: 'Sen J. Gonzalez',
                id: 45,
                image: 'http://stump.zackrose.net/images/avatar1.png',
            },
            blurb: 'was the Chairwoman of the Colorado Oil & Gas Conservation Commision'
        },
        date: 'Yesterday',
        key: 'newsFeed5',
    },
    {
        type: 'event',
        topic: {
            name: 'Fracking',
            id: 15,
        },
        bill: {
            name: 'HB-1090',
            id: 10,
        },
        content: {
            date: 'Feb 18, 2020 - 10:00am',
            name: 'House open comment on local control over fracking',
        },
        date: 'Yesterday',
        key: 'newsFeed6',
    },
];