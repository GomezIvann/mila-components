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
  $size: ActionButtonProps["size"];
  $variant: ActionButtonProps["variant"];
}>`
  all: unset;
  box-sizing: border-box;
  border: ${({ $variant }) => ($variant === "outlined" ? `1px solid ${alias.color.primaryBorder}` : "none")};
  border-radius: ${alias.space.primaryBorderRadius};
  width: fit-content;
  height: ${({ $size }) => ($size === "small" ? space[32] : space[40])};
  ${({ $hasIcon, $hasLabel, $iconPosition, $size }) => {
    if (!$hasIcon) return `padding: ${space[8]} ${space[$size === "small" ? 12 : 16]};`;
    else {
      if (!$hasLabel) return `padding: ${space[8]};`;
      else {
        if ($iconPosition === "right")
          return `padding: ${space[8]} ${space[$size === "small" ? 8 : 12]} ${space[8]} ${space[$size === "small" ? 12 : 16]};`;
        else
          return `padding: ${space[8]} ${space[$size === "small" ? 12 : 16]} ${space[8]} ${space[$size === "small" ? 8 : 12]};`;
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
  font-size: ${({ $size }) => ($size === "small" ? typography.size.sm : typography.size.md)};
  font-weight: ${typography.weight.semibold};
  line-height: ${({ $size }) => ($size === "small" ? typography.lineHeight.snug : typography.lineHeight.normal)};
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
      size = "medium",
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
      $size={size}
      $variant={variant}
      {...rest}
    >
      {icon && (
        <Icon icon={icon} height={size === "small" ? "16px" : "24px"} width={size === "small" ? "16px" : "24px"} />
      )}
      {children}
    </StyledActionButton>
  )
);

export default ActionButton;
