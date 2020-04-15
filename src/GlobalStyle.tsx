import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  margin: 0;
  font-family: 'Galano Grotesque', Arial, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'Galano Grotesque';
  src: url(./fonts/GalanoGrotesque-Regular.otf) format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Galano Grotesque';
  src: url(./fonts/GalanoGrotesque-Medium.otf) format('opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Galano Grotesque';
  src: url(./fonts/GalanoGrotesque-SemiBold.otf) format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Galiano Grotesque';
  src: url(./fonts/GalanoGrotesque-Italic.otf) format('opentype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Galiano Grotesque';
  src: url(./fonts/GalanoGrotesque-MediumItalic.otf) format('opentype');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'Galiano Grotesque SemiBoldItalic';
  src: url(./fonts/GalanoGrotesque-SemiBoldItalic.otf) format('opentype');
  font-weight: 600;
  font-style: italic;
}

`;
