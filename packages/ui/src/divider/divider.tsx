import styled from "styled-components";
import DividerProps, { TransientDividerProps } from "./types";
import alias from "../common/alias-tokens";

const StyledDivider = styled.hr<TransientDividerProps>`
  margin: 0;
  ${({ $lightness, $orientation, $weight }) => `
    border-color: ${$lightness === "light" ? alias.color.primaryBorder : alias.color.secondaryBorder};
    ${$orientation === "horizontal" ? "width" : "min-height"}: 100%;
    ${$orientation === "horizontal" ? "height" : "width"}: 0px;
    ${
      $orientation === "horizontal"
        ? "border-width: " + ($weight === "regular" ? "1px 0 0 0" : "2px 0 0 0")
        : "border-width: " + ($weight === "regular" ? "0 0 0 1px" : "0 0 0 2px")
    };
  `}
`;

const Divider = ({
  decorative = true,
  lightness = "light",
  orientation = "horizontal",
  weight = "regular",
}: DividerProps) => (
  <StyledDivider
    aria-orientation={orientation}
    aria-hidden={decorative}
    $lightness={lightness}
    $orientation={orientation}
    $weight={weight}
  />
);

export default Divider;
