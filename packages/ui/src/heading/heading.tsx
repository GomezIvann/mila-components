import styled from "styled-components";
import HeadingProps from "./types";
import { typography } from "../common/core-tokens";

const StyledHeading = styled.h1<{ level: HeadingProps["level"] }>`
  font-family: ${typography.family.sans};

  ${({ level }) => {
    switch (level) {
      case 1:
        return `
          font-size: ${typography.size["3xl"]};
          font-weight: ${typography.weight.bold};
          line-height: ${typography.lineHeight.tight};
        `;
      case 2:
        return `
          font-size: ${typography.size["2xl"]};
          font-weight: ${typography.weight.semibold};
          line-height: ${typography.lineHeight.snug};
        `;
      case 3:
        return `
          font-size: ${typography.size.xl};
          font-weight: ${typography.weight.semibold};
          line-height: ${typography.lineHeight.snug};
        `;
    }
  }}
`;

const Heading = ({ level = 1, children }: HeadingProps) => {
  const as = `h${level}`;
  return (
    <StyledHeading level={level} as={as}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
