import styled from "styled-components";
import { typography } from "../common/core-tokens";

const Paragraph = styled.p`
  margin: 0;
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  line-height: ${typography.lineHeight.normal};
`;

export default Paragraph;
