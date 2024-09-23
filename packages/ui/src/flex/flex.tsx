import styled from "styled-components";
import FlexProps, { TransientFlexProps } from "./types";
import { space } from "../common/core-tokens";

const Flex = ({
  direction = "row",
  wrap = "nowrap",
  gap = 0,
  order = 0,
  grow = 0,
  shrink = 1,
  basis = "auto",
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "normal",
  alignSelf = "auto",
  children,
}: FlexProps) => (
  <StyledFlex
    $direction={direction}
    $wrap={wrap}
    $gap={gap}
    $order={order}
    $grow={grow}
    $shrink={shrink}
    $basis={basis}
    $justifyContent={justifyContent}
    $alignItems={alignItems}
    $alignContent={alignContent}
    $alignSelf={alignSelf}
  >
    {children}
  </StyledFlex>
);

const StyledFlex = styled.div<TransientFlexProps>`
  display: flex;

  ${({
    $alignContent,
    $alignItems,
    $alignSelf,
    $gap,
    $basis,
    $direction,
    $grow,
    $shrink,
    $wrap,
    $justifyContent,
    $order,
  }) => `
    align-content: ${$alignContent};
    align-items: ${$alignItems};
    align-self: ${$alignSelf};
    flex-basis: ${$basis};
    flex-direction: ${$direction};
    flex-grow: ${$grow};
    flex-shrink: ${$shrink};
    flex-wrap: ${$wrap};
    justify-content: ${$justifyContent};
    order: ${$order};
    ${typeof $gap === "number" ? `gap: ${space[$gap]};` : ""}
    ${typeof $gap === "object" ? `column-gap: ${space[$gap.columnGap ?? 0]}; row-gap: ${space[$gap.rowGap ?? 0]};` : ""}
  `}
`;

export default Flex;
