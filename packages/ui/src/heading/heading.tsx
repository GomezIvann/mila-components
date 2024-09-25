import styled from "styled-components";
import HeadingProps from "./types";
import { color, typography } from "../common/core-tokens";

const StyledHeading = styled.h1<{ $level: HeadingProps["level"] }>`
  margin: 0;
  color: ${color.grey[900]};
  font-family: ${typography.family.sans};

  ${({ $level }) => {
    switch ($level) {
      case 1:
        return `
          font-size: ${typography.size["4xl"]};
          font-style: normal;
          font-weight: ${typography.weight.bold};
          letter-spacing: ${typography.letterSpacing.tight};
          line-height: ${typography.lineHeight.tight};
        `;
      case 2:
        return `
          font-size: ${typography.size["2xl"]};
          font-style: normal;
          font-weight: ${typography.weight.semibold};
          letter-spacing: ${typography.letterSpacing.normal};
          line-height: ${typography.lineHeight.normal};
        `;
      case 3:
        return `
          font-size: ${typography.size.xl};
          font-style: normal;
          font-weight: ${typography.weight.semibold};
          letter-spacing: ${typography.letterSpacing.wide};
          line-height: ${typography.lineHeight.tight};
        `;
      case 4:
        return `
          font-size: ${typography.size.md};
          font-style: normal;
          font-weight: ${typography.weight.semibold};
          letter-spacing: ${typography.letterSpacing.normal};
          line-height: ${typography.lineHeight.normal};
        `;
      case 5:
        return `
          font-size: ${typography.size.sm};
          font-style: normal;
          font-weight: ${typography.weight.semibold};
          letter-spacing: ${typography.letterSpacing.wide};
          line-height: ${typography.lineHeight.normal};
        `;
    }
  }}
`;

const Heading = ({ level = 1, children }: HeadingProps) => (
  <StyledHeading $level={level} as={`h${level}`}>
    {children}
  </StyledHeading>
);

export default Heading;
