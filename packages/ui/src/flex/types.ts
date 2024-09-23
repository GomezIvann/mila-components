import { space } from "../common/core-tokens";

export type Spaces = keyof typeof space;
type Gap = { rowGap: Spaces; columnGap?: Spaces } | { rowGap?: Spaces; columnGap: Spaces } | Spaces;

type FlexProps = {
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
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: Gap;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: string;
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
};

export type TransientFlexProps = {
  [K in keyof Omit<FlexProps, "children" | "as"> as `$${K}`]: Omit<FlexProps, "children" | "as">[K];
};

export default FlexProps;
