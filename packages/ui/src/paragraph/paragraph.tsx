import styled from "styled-components";
import { typography } from "../common/core-tokens";
import { ReactNode } from "react";
import alias from "../common/alias-tokens";

const Paragraph = ({ children }: { children: ReactNode }) => <StyledParagraph>{children}</StyledParagraph>;

const StyledParagraph = styled.p`
  margin: 0;
  color: ${alias.color.text};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  line-height: ${typography.lineHeight.normal};
`;

export default Paragraph;
