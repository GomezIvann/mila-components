import styled from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import LinkProps from "./types";
import alias from "../common/alias-tokens";
import Icon from "../common/icon/icon";
import { forwardRef } from "react";

const StyledLink = styled.a<{ $disabled?: LinkProps["disabled"]; $inheritStyles: LinkProps["inheritStyles"] }>`
  border-radius: ${alias.space.primaryBorderRadius};
  padding: 0;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: ${space[4]};
  color: ${color.blue[500]};
  font-family: ${({ $inheritStyles }) => ($inheritStyles ? "inherit" : typography.family.sans)};
  font-size: ${({ $inheritStyles }) => ($inheritStyles ? "inherit" : typography.size.md)};
  font-weight: ${({ $inheritStyles }) => ($inheritStyles ? "inherit" : typography.weight.medium)};
  line-height: ${({ $inheritStyles }) => ($inheritStyles ? "inherit" : typography.lineHeight.normal)};
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
          outline: 2px solid ${alias.color.focus};
        }
  `};
`;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, disabled = false, href, icon, inheritStyles, newWindow = false, onClick, ...rest }, ref) => (
    <StyledLink
      aria-disabled={disabled}
      href={disabled ? undefined : href}
      $inheritStyles={inheritStyles}
      onClick={disabled ? undefined : onClick}
      target={newWindow ? "_blank" : "_self"}
      $disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      ref={ref}
      {...rest}
    >
      {icon && <Icon icon={icon} height="16px" width="16px" />}
      {children}
    </StyledLink>
  )
);

export default Link;
