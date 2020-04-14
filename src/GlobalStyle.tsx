import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  margin: 0;
  font-family: 'Galiano Grotesque Regular', Arial, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

@font-face {
  font-family: 'Galiano Grotesque Regular';
  src: url(./fonts/GalanoGrotesque-Regular.otf);
}

@font-face {
  font-family: 'Galiano Grotesque Medium';
  src: url(./fonts/GalanoGrotesque-Medium.otf);
}

@font-face {
  font-family: 'Galiano Grotesque SemiBold';
  src: url(./fonts/GalanoGrotesque-SemiBold.otf);
}

@font-face {
  font-family: 'Galiano Grotesque Italic';
  src: url(./fonts/GalanoGrotesque-Italic.otf);
}

@font-face {
  font-family: 'Galiano Grotesque MediumItalic';
  src: url(./fonts/GalanoGrotesque-MediumItalic.otf);
}

@font-face {
  font-family: 'Galiano Grotesque SemiBoldItalic';
  src: url(./fonts/GalanoGrotesque-SemiBoldItalic.otf);
}

@font-face {
    font-family: 'Adelle Light';
    src: url(./fonts/Adelle_light.otf);
}

@font-face {
    font-family: 'Adelle LightItalic';
    src: url(./fonts/Adelle_light.otf);
}

@font-face {
    font-family: 'Adelle Italic';
    src: url(./fonts/Adelle_light.otf);
}

`;
