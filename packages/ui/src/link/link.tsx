import styled from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import LinkProps from "./types";
import alias from "../common/alias-tokens";
import Icon from "../common/icon/icon";

const StyledLink = styled.a<{ $disabled?: LinkProps["disabled"] }>`
  border-radius: ${space[4]};
  padding: 0;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: ${space[8]};
  color: ${color.blue[500]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.medium};
  line-height: ${typography.lineHeight.snug};
  text-decoration: none;

  ${({ $disabled }) =>
    $disabled
      ? `
        color: ${color.grey[400]};
        pointer-events: none;`
      : `
        cursor: pointer;
        &:visited {
          color: ${color.blue[700]};
        }
        &:hover {
          color: ${color.blue[600]};
          text-decoration: underline;
        }
        &:focus {
          outline: 2px solid ${alias.focus};
          outline-offset: ${alias.focusOffset};
        }
  `};
`;

const Link = ({
  children,
  disabled,
  href,
  icon,
  newWindow,
  onClick,
  ...otherProps
}: LinkProps) => (
  <StyledLink
    aria-disabled={disabled}
    href={disabled ? undefined : href}
    onClick={disabled ? undefined : onClick}
    target={newWindow ? "_blank" : "_self"}
    $disabled={disabled}
    tabIndex={disabled ? -1 : 0}
    {...otherProps}
  >
    {icon && <Icon icon={icon} height="16px" width="16px" />}
    {children}
  </StyledLink>
);

export default Link;
