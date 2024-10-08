import { styled } from "styled-components";
import ActionButtonProps from "./types";
import Icon from "../common/icon/icon";
import { color, space, typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";
import { forwardRef } from "react";

export const StyledActionButton = styled.button<{
  $hasIcon: boolean;
  $hasLabel: boolean;
  $iconPosition: ActionButtonProps["iconPosition"];
  $variant: ActionButtonProps["variant"];
}>`
  all: unset;
  box-sizing: border-box;
  border: ${({ $variant }) => ($variant === "outlined" ? `1px solid ${alias.color.primaryBorder}` : "none")};
  border-radius: ${alias.space.primaryBorderRadius};
  width: fit-content;
  height: 40px;
  ${({ $hasIcon, $hasLabel, $iconPosition }) => {
    if (!$hasIcon) return `padding: ${space[8]} ${space[16]};`;
    else {
      if (!$hasLabel) return `padding: ${space[8]};`;
      else {
        if ($iconPosition === "right") return `padding: ${space[8]} ${space[12]} ${space[8]} ${space[16]};`;
        else return `padding: ${space[8]} ${space[16]} ${space[8]} ${space[12]};`;
      }
    }
  }}
  display: inline-flex;
  ${({ $iconPosition }) => $iconPosition === "right" && "flex-direction: row-reverse;"}
  align-items: center;
  gap: ${space[8]};
  background-color: ${({ $variant }) => ($variant === "outlined" ? color.white : color.transparent)};
  color: ${alias.color.text};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.semibold};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: ${alias.color.interactiveHover};
  }
  &:not(:disabled):active {
    background-color: ${alias.color.interactiveActive};
  }
  &:not(:disabled):focus {
    outline: 2px solid ${alias.color.focus};
    outline-offset: ${alias.space.focusOffset};
  }
`;

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    {
      children,
      disabled = false,
      icon,
      iconPosition = "left",
      onClick,
      title,
      type = "button",
      variant = "default",
      ...rest
    },
    ref
  ) => (
    <StyledActionButton
      aria-label={title}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      title={title}
      type={type}
      $hasIcon={Boolean(icon)}
      $hasLabel={Boolean(children)}
      $iconPosition={iconPosition}
      $variant={variant}
      {...rest}
    >
      {icon && <Icon icon={icon} height="24px" width="24px" />}
      {children}
    </StyledActionButton>
  )
);

export default ActionButton;
