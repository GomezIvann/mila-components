import styled from "styled-components";
import FlexProps, { TransientFlexProps } from "./types";
import { space } from "../common/core-tokens";

const StyledFlex = styled.div<TransientFlexProps>`
  display: ${({ $inline }) => ($inline ? "inline-flex" : "flex")};

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

const Flex = ({
  alignContent = "normal",
  alignItems = "stretch",
  alignSelf = "auto",
  basis = "auto",
  direction = "row",
  gap = 0,
  grow = 0,
  inline = false,
  justifyContent = "flex-start",
  order = 0,
  shrink = 1,
  wrap = "nowrap",
  children,
}: FlexProps) => (
  <StyledFlex
    as={inline ? "span" : "div"}
    $alignContent={alignContent}
    $alignItems={alignItems}
    $alignSelf={alignSelf}
    $basis={basis}
    $direction={direction}
    $gap={gap}
    $grow={grow}
    $inline={inline}
    $justifyContent={justifyContent}
    $order={order}
    $shrink={shrink}
    $wrap={wrap}
  >
    {children}
  </StyledFlex>
);

export default Flex;
