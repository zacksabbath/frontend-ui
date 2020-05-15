import { palette, main } from './colors';

export * from './colors';

export const spacing = {
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '25px',
  xxl: '30px',
  xxxl: '40px',
};

const font = {
  family:
    "'Galano Grotesque', Arial, 'Helvetica Neue', Arial, Helvetica, sans-serif",
  weights: {
    normal: 'normal',
    medium: 500,
    semiBold: 600,
  },
};

const breakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

/********** Default Export **********/

export default {
  font,
  spacing,
  palette,
  breakpoints,

  ...main,
};
