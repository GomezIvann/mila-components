import { styled } from "styled-components";
import BulletedListProps from "./types";
import { space, typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";

const StyledBulletedList = styled.ul<{ $styleType: BulletedListProps["styleType"] }>`
  margin: 0;
  padding: 0 0 0 ${space[40]};
  display: grid;
  gap: ${space[8]};
  list-style-type: ${(props) => props.$styleType};
  color: ${alias.color.text};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  line-height: ${typography.lineHeight.normal};
`;

const BulletedList = ({ children, styleType = "disc" }: BulletedListProps) => (
  <StyledBulletedList $styleType={styleType}>{children}</StyledBulletedList>
);
export default BulletedList;
