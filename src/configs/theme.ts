type TransitionFunc = (property: string) => string;
type screenType = "phone" | "tablet" | "laptop" | "desktop" | "wide" | "custom";

const colors = {
  black: "#0F0F0F",
  lightgrey: "#FAFAFA",
  white: "#FFFFFF",

  primary: "#F76C6C",
  primaryLight: "#F99797",

  secondary: "#23305E",
  secondaryLight: "#A8D0E6",
  secondaryDark: "#39424E",

  orange: "#ffa500",
  blue: "#0066cc",

  errorTxt: "#ff0000",
  errorBc: "#ff5050",

  lead: "#454545",

  greyVarF0: "#F0F0F0",
  greyVarF1: "#f1f1f1",
  greyVarF2: "#F2F2F2",
  greyVarF5: "#F5F5F5",
  greyVarE0: "#E0E0E0",
  greyVarE4: "#E4E4E4",
  greyVarD8: "#D8D8D8",
};

const gradients = {};

const transitions = {};

const shadows = {};

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const media: { [key in screenType]: any } = {
  custom: customMediaQuery,
  wide: customMediaQuery(1600),
  desktop: customMediaQuery(1200),
  laptop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

const customMediaSizeQuery = (size: number) => `${size}px`;

const mediaSizes: { [key in screenType]: any } = {
  custom: customMediaSizeQuery,
  wide: customMediaSizeQuery(1600),
  desktop: customMediaSizeQuery(1200),
  laptop: customMediaSizeQuery(922),
  tablet: customMediaSizeQuery(768),
  phone: customMediaSizeQuery(576),
};

export interface ITheme {
  colors: { [key: string]: string };
  transitions: { [key: string]: TransitionFunc };
  shadows: { [key: string]: string };
  gradients: { [key: string]: string };
  media: { [key in screenType]: Function | any };
  mediaSizes: { [key in screenType]: string };
}

export const theme: ITheme = {
  colors,
  shadows,
  gradients,
  transitions,
  media,
  mediaSizes,
};
