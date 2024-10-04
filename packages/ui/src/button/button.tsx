import styled from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import ButtonProps from "./types";
import alias from "../common/alias-tokens";
import Icon from "../common/icon/icon";
import { forwardRef } from "react";

type SemanticColors = "red" | "blue" | "green" | "yellow" | "grey";

const getColor = (semantic: Required<ButtonProps>["semantic"]): SemanticColors => {
  switch (semantic) {
    case "danger":
      return "red";
    case "info":
      return "blue";
    case "success":
      return "green";
    case "warning":
      return "yellow";
    case "default":
    default:
      return "grey";
  }
};

const getButtonStyles = (variant: string, semantic: Required<ButtonProps>["semantic"]) => {
  const semanticColor = getColor(semantic);
  const semanticColorToken = color[semanticColor][semanticColor === "grey" ? 900 : 500];

  switch (variant) {
    case "outlined":
      return `
        background-color: transparent;
        color: ${semanticColorToken};
        border: 1px solid ${semanticColorToken};
        &:not(:disabled):hover {
          background-color: ${color[semanticColor][100]};
        }
        &:not(:disabled):active {
          background-color: ${color[semanticColor][200]};
        }
      `;
    case "text":
      return `
        background-color: transparent;
        color: ${semanticColorToken};
        border: none;
        &:not(:disabled):hover {
          background-color: ${color[semanticColor][100]};
        }
        &:not(:disabled):active {
          background-color: ${color[semanticColor][200]};
        }
      `;
    case "primary":
    default:
      return `
        background-color: ${semanticColorToken};
        color: ${color.white};
        border: none;
        &:not(:disabled):hover {
          background-color: ${color[semanticColor][600]};
        }
        &:not(:disabled):active {
          background-color: ${color[semanticColor][700]};
        }
      `;
  }
};

const StyledButton = styled.button<{
  $hasIcon: boolean;
  $iconPosition: ButtonProps["iconPosition"];
  $semantic: Required<ButtonProps>["semantic"];
  $variant: string;
}>`
  all: unset;
  box-sizing: border-box;
  border-radius: ${space[64]};
  width: fit-content;
  height: 40px;
  padding: ${space[8]} ${space[20]};
  ${({ $hasIcon, $iconPosition }) => {
    if ($hasIcon && $iconPosition === "right") return `padding-right: ${space[16]};`;
    else if ($hasIcon && $iconPosition === "left") return `padding-left: ${space[16]};`;
  }}
  display: inline-flex;
  ${({ $iconPosition }) => $iconPosition === "right" && "flex-direction: row-reverse;"}
  align-items: center;
  gap: ${space[8]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.semibold};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  white-space: nowrap;
  cursor: pointer;
  ${({ $variant, $semantic }) => getButtonStyles($variant, $semantic)};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:not(:disabled):focus {
    outline: 2px solid ${alias.color.focus};
    outline-offset: ${alias.space.focusOffset};
  }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled = false,
      icon,
      iconPosition = "left",
      onClick,
      semantic = "default",
      type = "button",
      variant = "primary",
      ...rest
    },
    ref
  ) => (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      type={type}
      $hasIcon={Boolean(icon)}
      $iconPosition={iconPosition}
      $semantic={semantic}
      $variant={variant}
      {...rest}
    >
      {icon && <Icon icon={icon} height="24px" width="24px" />}
      {children}
    </StyledButton>
  )
);

export default Button;
