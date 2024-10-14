import { space } from "../common/core-tokens";

export type Spaces = keyof typeof space;
type Gap = { columnGap?: Spaces; rowGap: Spaces } | { columnGap: Spaces; rowGap?: Spaces } | Spaces;

type FlexProps = {
  alignContent?:
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "normal"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch";
  alignItems?:
    | "baseline"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "normal"
    | "self-end"
    | "self-start"
    | "start"
    | "stretch";
  alignSelf?: "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
  basis?: string;
  children: React.ReactNode;
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  gap?: Gap;
  grow?: number;
  inline?: boolean;
  justifyContent?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "left"
    | "normal"
    | "right"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start";
  order?: number;
  shrink?: number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
};

export type TransientFlexProps = {
  [K in keyof Omit<FlexProps, "children"> as `$${K}`]: Omit<FlexProps, "children">[K];
};

export default FlexProps;
