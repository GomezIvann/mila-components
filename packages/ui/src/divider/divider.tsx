import styled from "styled-components";
import DividerProps from "./types";
import { color } from "../common/core-tokens";

const StyledDivider = styled.hr<DividerProps>`
  margin: 0;
  border-color: ${color.grey[500]};
  ${({ orientation, weight }) => `
    ${orientation === "horizontal" ? "width" : "min-height"}: 100%;
    ${orientation === "horizontal" ? "height" : "width"}: 0px;
    ${
      orientation === "horizontal"
        ? "border-width: " + (weight === "regular" ? "1px 0 0 0" : "2px 0 0 0")
        : "border-width: " + (weight === "regular" ? "0 0 0 1px" : "0 0 0 2px")
    };
  `}
`;

const Divider = ({ orientation = "horizontal", weight = "regular", decorative = true }: DividerProps) => (
  <StyledDivider orientation={orientation} weight={weight} aria-orientation={orientation} aria-hidden={decorative} />
);

export default Divider;
