// Greyscale
const white = '#FFFFFF';
const black = '#000000';
const lightGrey = '#EEEEEE';
const middleGrey = '#AAAAAA';
const darkGrey = '#333333';

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

export const palette = {
  white,
  black,
  lightGrey,
  middleGrey,
  darkGrey,
  purple,
  purpleDark,
  purpleDarker,
  purpleDarkest,
  purpleLightText,
  purpleDarkText,
  magenta,
  yellow,
  yellowDark,
  yellowDarkText,
  green,
  teal,
  tealDark,
  tealText,
  orange,
  orangeDark,
  orangeText,
  orangeLightText,
  aqua,
  aquaDark,
  aquaText,
  violet,
  violetDark,
  violetText,
  olive,
  oliveDark,
  oliveText,
};

/********** Main Theme (purple) **********/
export const main = {
  background: {
    primary: purpleDarkest,
    secondary: purpleDarker,
  },
  foreground: {
    //primary is darker
    primary: purpleDark,
    //secondary is brighter
    secondary: purple,
    icon: purple,
  },
  text: {
    primary: white,
    secondary: purpleLightText,
    selected: white,
    disabled: purpleDarkText,
  },

  action: {
    selected: magenta,
    disabled: purple,
  },
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

  palette,
};

/********** Theme Overrides **********/

const news = {
  background: {
    primary: orange,
    secondary: orangeDark,
  },
  foreground: {
    primary: orangeDark,
    icon: white,
  },
  text: {
    primary: orangeText,
    secondary: white,
    primaryLight: orangeLightText,
  },
};

// TODO: "question" becomes "quote"
const question = {
  background: {
    primary: teal,
    secondary: tealDark,
  },
  foreground: {
    primary: tealDark,
    icon: white,
  },
  text: {
    primary: tealText,
    secondary: white,
  },
};

//TODO: "contribution" becomes "finance"
const contribution = {
  background: {
    primary: olive,
    secondary: oliveDark,
  },
  foreground: {
    primary: oliveDark,
    icon: white,
  },
  text: {
    primary: oliveText,
    secondary: white,
  },
};

//TODO: "vote" becomes "legislation"
const vote = {
  background: {
    primary: white,
    secondary: lightGrey,
  },
  foreground: {
    primary: lightGrey,
    icon: middleGrey,
  },

  text: {
    primary: black,
    secondary: darkGrey,
  },
};

const history = {
  background: {
    primary: aqua,
    secondary: aquaDark,
  },
  foreground: {
    primary: aquaDark,
    icon: white,
  },
  text: {
    primary: aquaText,
    secondary: white,
  },
};

const event = {
  background: {
    primary: violet,
    secondary: violetDark,
  },
  foreground: {
    primary: violetDark,
    icon: white,
  },
  text: {
    primary: violetText,
    secondary: white,
    primaryLight: white,
  },
};

/********** Theme Extraction Logic **********/

export const cardThemes = {
  news,
  question,
  contribution,
  vote,
  history,
  event,
};

export type cardTypes =
  | 'news'
  | 'question'
  | 'contribution'
  | 'vote'
  | 'history'
  | 'event';

export const getColorTheme = (key?: cardTypes) =>
  key && key in cardThemes ? { ...main, ...cardThemes[key] } : main;

// var getColorTheme3 = (key) => {
//     console.log('key in cardThemes???', key in cardThemes);
//     console.log('main', main);
//     console.log('the merge', _.merge(main, cardThemes[key]));
//     return key in cardThemes ? _.merge(main, cardThemes[key]) : main;
//   };
