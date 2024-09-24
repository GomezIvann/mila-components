type DividerProps = {
  decorative?: boolean;
  lightness?: "light" | "dark";
  orientation?: "horizontal" | "vertical";
  weight?: "regular" | "strong";
};

export type TransientDividerProps = {
  [K in keyof DividerProps as `$${K}`]: DividerProps[K];
};

export default DividerProps;
