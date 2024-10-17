interface Sizes {
  ltg: string;
  lg: string;
  xl: string;
}

export const size: Sizes = {
  ltg: '1280px',
  lg: '1366px',
  xl: '1536px',
};

export default {
  maxLtg: `(max-width: ${size.ltg})`,
  maxLg: `(max-width: ${size.lg})`,
  maxXl: `(max-width: ${size.xl})`,
  minLtg: `(min-width: ${size.ltg})`,
  minLg: `(min-width: ${size.lg})`,
  minXl: `(min-width: ${size.xl})`,
};
