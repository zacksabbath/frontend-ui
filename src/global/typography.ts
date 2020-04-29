/* This file is not being used at the moment but may in the future */

//Typography
const mainFont = 'Galano Grotesque';
const t12rem = '.75rem';
const t13rem = '.8125rem';
const t14rem = '.875rem';
const t15rem = '.9375rem';
const t16rem = '1rem';
const t19rem = '1.1875rem';
const t20rem = '1.25rem';
const t22rem = '1.375rem';
const t24rem = '1.5rem';
const t26rem = '1.625rem';
const t30rem = '1.875rem';

const normalText = {
  fontFamily: mainFont,
  fontWeight: 400,
  fontStyle: 'normal',
};

const t12 = {
  ...normalText,
  fontSize: t12rem,
  lineHeight: t14rem,
};
const t13 = {
  ...normalText,
  fontSize: t13rem,
  lineHeight: t16rem,
};
const t14 = {
  ...normalText,
  fontSize: t14rem,
  lineHeight: t20rem,
};
const t15 = {
  ...normalText,
  fontSize: t15rem,
  lineHeight: t20rem,
};
const t16 = {
  ...normalText,
  fontSize: t16rem,
  lineHeight: t20rem,
};
const t19 = {
  ...normalText,
  fontSize: t19rem,
  lineHeight: t26rem,
};
const t20 = {
  ...normalText,
  fontSize: t20rem,
  lineHeight: t26rem,
};
const t22 = {
  ...normalText,
  fontSize: t22rem,
  lineHeight: t26rem,
};
const t24 = {
  ...normalText,
  fontSize: t24rem,
  lineHeight: t26rem,
};
const t26 = {
  ...normalText,
  fontSize: t26rem,
  lineHeight: t26rem,
};
const t30 = {
  ...normalText,
  fontSize: t30rem,
  lineHeight: t30rem,
};

export const fontWeights = {
  normal: 'normal',
  medium: 500,
  semiBold: 600,
};

export default {
  typography: {
    htmlFontSize: 16,

    mainHeader: {
      //22px bold
      ...t22,
      fontWeight: fontWeights.medium,
    },
    h1: {
      //30px medium
      ...t30,
      fontWeight: fontWeights.medium,
    },
    h2: {
      //26px bold
      ...t26,
      fontWeight: fontWeights.semiBold,
    },
    h3: {
      //22px bold
      ...t22,
      fontWeight: fontWeights.semiBold,
    },
    h4: {
      //20px medium, section header
      ...t20,
      fontWeight: fontWeights.medium,
    },
    h5: {
      //19px medium, body header
      ...t19,
      fontWeight: fontWeights.medium,
    },
    body1: {
      //15px regular
      ...t15,
    },
    body2: {
      //14px regular
      ...t14,
    },
    body3: {
      //13px regular
      ...t13,
    },
    button: {
      //15px regular
      ...t15,
    },
    nav: {
      //16px medium
      ...t16,
      fontWeight: fontWeights.medium,
    },
    nameSm: {
      //12px medium
      ...t12,
      fontWeight: fontWeights.medium,
    },
    nameMed: {
      //15px medium
      ...t15,
      fontWeight: fontWeights.medium,
    },
    counts: {
      //14px bold
      ...t14,
      fontWeight: fontWeights.semiBold,
    },
    tag: {
      //13px medium
      ...t13,
      fontWeight: fontWeights.medium,
    },
    legis: {
      header: {
        //16px bold
        ...t16,
        fontWeight: fontWeights.semiBold,
      },
      name: {
        //26px medium
        ...t26,
        fontWeight: fontWeights.medium,
      },
    },

    //cards

    card: {
      date: {
        //13px regular
        ...t13,
      },
      subject: {
        //15px medium
        ...t15,
        fontWeight: fontWeights.medium,
      },
      body: {
        //15px regular
        ...t15,
      },
      emphasis: {
        //15px medium
        ...t15,
        fontWeight: fontWeights.medium,
      },
      quote: {
        //15px medium
        ...t15,
        fontWeight: fontWeights.medium,
        fontStyle: 'italic',
      },
      event: {
        date: {
          //14px medium
          ...t14,
          fontWeight: fontWeights.medium,
        },
        title: {
          //15px medium
          ...t15,
          fontWeight: fontWeights.medium,
        },
        location: {
          //14px medium
          ...t14,
          fontWeight: fontWeights.medium,
        },
      },
      legis: {
        name: {
          //20px bold
          ...t20,
          fontWeight: fontWeights.semiBold,
        },
        status: {
          //16px medium
          ...t16,
          fontWeight: fontWeights.medium,
        },
      },
      news: {
        source: {
          //14px bold
          ...t14,
          fontWeight: fontWeights.semiBold,
        },
        headline: {
          //20px medium
          ...t20,
          fontWeight: fontWeights.medium,
        },
      },
      newsSm: {
        source: {
          //14px bold
          ...t14,
          fontWeight: fontWeights.semiBold,
        },
        headline: {
          //16px medium
          ...t16,
          fontWeight: fontWeights.medium,
        },
      },
    },
  },
  spacing: {
    sm: 10,
    med: 15,
    l: 20,
    xl: 25,
    xxl: 30,
    xxxl: 40,
  },
};
