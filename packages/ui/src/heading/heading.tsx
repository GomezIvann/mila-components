import styled from "styled-components";
import HeadingProps from "./types";
import { typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";

const StyledHeading = styled.h1<{ $level: HeadingProps["level"]; $weight: HeadingProps["weight"] }>`
  margin: 0;
  color: ${alias.color.text};
  font-family: ${typography.family.sans};

  ${({ $level, $weight }) => {
    switch ($level) {
      case 1:
        return `
          font-size: ${typography.size["4xl"]};
          font-style: normal;
          font-weight: ${$weight === "light" ? typography.weight.normal : typography.weight.bold};
          letter-spacing: ${typography.letterSpacing.tight};
          line-height: ${typography.lineHeight.tight};
        `;
      case 2:
        return `
          font-size: ${typography.size["2xl"]};
          font-style: normal;
          font-weight: ${$weight === "light" ? typography.weight.normal : typography.weight.semibold};
          letter-spacing: ${typography.letterSpacing.normal};
          line-height: ${typography.lineHeight.normal};
        `;
      case 3:
        return `
          font-size: ${typography.size.xl};
          font-style: normal;
          font-weight: ${$weight === "light" ? typography.weight.normal : typography.weight.semibold};
          letter-spacing: ${typography.letterSpacing.wide};
          line-height: ${typography.lineHeight.tight};
        `;
      case 4:
        return `
          font-size: ${typography.size.md};
          font-style: normal;
          font-weight: ${$weight === "light" ? typography.weight.normal : typography.weight.semibold};
          letter-spacing: ${typography.letterSpacing.normal};
          line-height: ${typography.lineHeight.normal};
        `;
      case 5:
        return `
          font-size: ${typography.size.sm};
          font-style: normal;
          font-weight: ${$weight === "light" ? typography.weight.normal : typography.weight.semibold};
          letter-spacing: ${typography.letterSpacing.wide};
          line-height: ${typography.lineHeight.tight};
        `;
    }
  }}
`;

const Heading = ({ children, level = 1, weight = "heavy" }: HeadingProps) => (
  <StyledHeading $level={level} $weight={weight} as={`h${level}`}>
    {children}
  </StyledHeading>
);

export default Heading;
