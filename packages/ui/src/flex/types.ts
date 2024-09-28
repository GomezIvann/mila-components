import { space } from "../common/core-tokens";

export type Spaces = keyof typeof space;
type Gap = { rowGap: Spaces; columnGap?: Spaces } | { rowGap?: Spaces; columnGap: Spaces } | Spaces;

type FlexProps = {
  alignContent?:
    | "normal"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "center"
    | "baseline";
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  basis?: string;
  children: React.ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: Gap;
  grow?: number;
  inline?: boolean;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  order?: number;
  shrink?: number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
};

export type TransientFlexProps = {
  [K in keyof Omit<FlexProps, "children"> as `$${K}`]: Omit<FlexProps, "children">[K];
};

export default FlexProps;
