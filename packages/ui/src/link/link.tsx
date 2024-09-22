import styled from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import LinkProps from "./types";
import alias from "../common/alias-tokens";
import Icon from "../common/icon/icon";

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${space[8]};
  padding: 0;
  text-decoration: none;
  color: ${color.blue[500]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.medium};
  line-height: ${typography.lineHeight.normal};
  border-radius: ${space[4]};
  cursor: pointer;

  &:visited {
    color: ${color.grey[900]};
  }
  &:active {
    color: ${color.blue[600]};
  }
  &:focus {
    outline: 2px solid ${alias.focus};
    outline-offset: ${alias.focusOffset};
  }
`;

const Link = ({ children, href, icon, newWindow, onClick }: LinkProps) => (
  <StyledLink
    href={href}
    onClick={() => onClick?.()}
    target={newWindow ? "_blank" : "_self"}
  >
    {icon && <Icon icon={icon} width="16px" height="16px" />}
    {children}
  </StyledLink>
);

export default Link;
