// Primary
const purple = '#6340B2';
const purpleDark = '#3C266E';
const purpleDarker = '#26154A';
const purpleDarkest = '#1E103A';
const pink = '#DA0064';
const yellow = '#FFD52D';
const yellowDark = '#DDC255';

// Secondary
const teal = '#77CCC5';
const tealDark = '#5CA29D';
const orange = '#FE8E4D';
const orangeDark = '#DF7A3E';
const aqua = '#4ECC8F';
const aquaDark = '#3EA271';
const violet = '#AB96C7';
const violetDark = '#866CA9';
const olive = '#9ACC64';
const oliveDark = '#78A746';

// Primary Text
const purpleLightText = '#A48ED4';
const purpleDarkText = '#604E86';
const yellowDarkText = '#564810';

// Secondary Text
const tealDarkText = '#203735';
const orangeDarkText = '#5E351C';
const aquaDarkText = '#1E4F37';
const violetDarkText = '#412C5E';
const oliveDarkText = '#39521F';

// Greyscale
const white = '#FFFFFF';
const black = '#000000';
const middleGrey = '#AAAAAA';
const darkGrey = '#333333';

// primary: Main card background
// Secondary: ellipses and bubble background
// text: Main Text
// secondary text: Date in bottom right

const news = {
    primary: purpleDark,
    secondary: purple,
    text: purpleLightText,
    secondaryText: purpleLightText,
};

const question = {
    primary: teal,
    secondary: tealDark,
    text: black,
    secondaryText: tealDarkText,
};

const contribution = {
    primary: aqua,
    secondary: aquaDark,
    text: black,
    secondaryText: tealDarkText,
};

const vote = {
    primary: white,
    secondary: middleGrey,
    text: black,
    secondaryText: darkGrey,
};

const history = {
    primary: orange,
    secondary: orangeDark,
    text: black,
    secondaryText: orangeDarkText,
};

const event = {
    primary: violet,
    secondary: violetDark,
    text: white,
    secondaryText: violetDarkText,
};

export const cardThemes = {
    news,
    question,
    contribution,
    vote,
    history,
    event,
}

export const colors = {
    //greyscale
    white,
    black,
    middleGrey,
    darkGrey,

    //primary
    purple,
    purpleDark,
    purpleDarker,
    purpleDarkest,
    pink,
    yellow,
    yellowDark,

    //secondary
    teal,
    tealDark,
    orange,
    orangeDark,
    aqua,
    aquaDark,
    violet,
    violetDark,
    olive,
    oliveDark,

    //primary text
    purpleLightText,
    purpleDarkText,
    yellowDarkText,
    
    //secondary text
    tealDarkText,
    orangeDarkText,
    aquaDarkText,
    violetDarkText,
    oliveDarkText,
}