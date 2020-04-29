//import { normalize } from 'path';

// Primary Colors
const purple = '#6340B2';
const purpleDark = '#3C266E';
const purpleDarker = '#26154A';
const purpleDarkest = '#1E103A';
const purpleLightText = '#A48ED4';
const purpleDarkText = '#7764A1';

const magenta = '#DA0064';

const yellow = '#FFD52D';
const yellowDark = '#DDC255';
const yellowDarkText = '#564810';

const green = '#46B918';

// Secondary Colors
const teal = '#77CCC5';
const tealDark = '#5CA29D';
const tealText = '#203735';

const orange = '#FE8E4D';
const orangeDark = '#DF7A3E';
const orangeText = '#5E351C';
const orangeLightText = '#AB5D30';

const aqua = '#4ECC8F';
const aquaDark = '#3EA271';
const aquaText = '#1E4F37';

const violet = '#AB96C7';
const violetDark = '#866CA9';
const violetText = '#412C5E';

const olive = '#9ACC64';
const oliveDark = '#78A746';
const oliveText = '#39521F';

// Greyscale
const white = '#FFFFFF';
const black = '#000000';
const lightestGrey = '#F3F3F3';
const lightGrey = '#EEEEEE';
const middleGrey = '#AAAAAA';
const darkGrey = '#333333';

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
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // direction: 'ltr',
  // mixins: {
  //   toolbar: {
  //     minHeight: 56,
  //     '@media (min-width:0px) and (orientation: landscape)': {
  //       minHeight: 48,
  //     },
  //     '@media (min-width:600px)': {
  //       minHeight: 64,
  //     },
  //   },
  // },
  // overrides: {},
  palette: {
    white: white,
    black: black,
    grey: {
      lightestGrey,
      lightGrey,
      middleGrey,
      darkGrey,
    },
    main: {
      //purple theme
      background: {
        primary: purpleDarkest,
        secondary: purpleDarker,
        gradient: {
          //primary gradient is brighter
          primary: {
            light: '#301D58',
            dark: purpleDarker,
            // lightBorder: '#3C266E',
            // darkBorder: '#2D1A57'
          },
          //secondary gradient is more subtle
          secondary: {
            light: purpleDarker,
            dark: '#221242',
            // lightBorder: '#26154A',
            // darkBorder: '#26154A'
          },
        },
      },
      foreground: {
        //primary is darker
        primary: purpleDark,
        //secondary is brighter
        secondary: purple,
      },
      text: {
        primary: white,
        secondary: purpleLightText,
        selected: white,
        disabled: purpleDarkText,
      },
      action: {
        selected: magenta,
      },
    },

    news: {
      primary: orange,
      secondary: orangeDark,
      icon: white,
      text: {
        primary: orangeText,
        secondary: white,
        primaryLight: orangeLightText,
      },
    },

    quote: {
      primary: teal,
      secondary: tealDark,
      icon: white,
      text: {
        primary: tealText,
        secondary: white,
      },
    },

    history: {
      primary: aqua,
      secondary: aquaDark,
      icon: white,
      text: {
        primary: aquaText,
        secondary: white,
      },
    },

    finance: {
      primary: olive,
      secondary: oliveDark,
      icon: white,
      text: {
        primary: oliveText,
        secondary: white,
      },
    },

    event: {
      primary: violet,
      secondary: violetDark,
      icon: white,
      text: {
        primary: violetText,
        secondary: white,
        primaryLight: white,
      },
    },

    legis: {
      primary: white,
      secondary: lightGrey,
      icon: middleGrey,
      text: {
        primary: black,
        secondary: darkGrey,
      },
    },
  },

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
