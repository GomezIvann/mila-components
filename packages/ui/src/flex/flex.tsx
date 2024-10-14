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
    ${typeof $alignContent === "string" ? `align-content: ${$alignContent};` : ""}
    ${typeof $alignItems === "string" ? `align-items: ${$alignItems};` : ""}
    ${typeof $alignSelf === "string" ? `align-self: ${$alignSelf};` : ""}
    ${typeof $basis === "string" ? `flex-basis: ${$basis};` : ""}
    ${typeof $direction === "string" ? `flex-direction: ${$direction};` : ""}
    ${typeof $grow === "number" ? `flex-grow: ${$grow};` : ""}
    ${typeof $justifyContent === "string" ? `justify-content: ${$justifyContent};` : ""}
    ${typeof $order === "number" ? `order: ${$order};` : ""}
    ${typeof $shrink === "number" ? `flex-shrink: ${$shrink};` : ""}
    ${typeof $wrap === "string" ? `flex-wrap: ${$wrap};` : ""}
    ${typeof $gap === "number" ? `gap: ${space[$gap]};` : ""}
    ${typeof $gap === "object" ? `column-gap: ${space[$gap.columnGap ?? 0]}; row-gap: ${space[$gap.rowGap ?? 0]};` : ""}
  `}
`;

const Flex = ({
  alignContent,
  alignItems,
  alignSelf,
  basis,
  children,
  direction,
  gap,
  grow,
  inline,
  justifyContent,
  order,
  shrink,
  wrap,
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
