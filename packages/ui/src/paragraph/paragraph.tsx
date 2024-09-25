import styled from "styled-components";
import { color, typography } from "../common/core-tokens";
import { ReactNode } from "react";

const Paragraph = ({ children }: { children: ReactNode }) => <StyledParagraph>{children}</StyledParagraph>;

const StyledParagraph = styled.p`
  margin: 0;
  color: ${color.grey[900]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  line-height: ${typography.lineHeight.normal};
`;

export default Paragraph;
