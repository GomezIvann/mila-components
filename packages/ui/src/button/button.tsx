import styled from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import ButtonProps from "./types";
import alias from "../common/alias-tokens";
import Icon from "../common/icon/icon";

type SemanticColors = "red" | "blue" | "green" | "yellow" | "grey";

const getColor = (
  semantic: Required<ButtonProps>["semantic"]
): SemanticColors => {
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

const getButtonStyles = (
  variant: string,
  semantic: Required<ButtonProps>["semantic"]
) => {
  const semanticColor = getColor(semantic);
  const semanticColorToken =
    color[semanticColor][semanticColor === "grey" ? 900 : 500];

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
  $variant: string;
  $semantic: Required<ButtonProps>["semantic"];
}>`
  box-sizing: border-box;
  border-radius: ${space[128]};
  width: fit-content;
  height: 40px;
  padding: ${space[8]} ${space[20]};
  display: inline-flex;
  align-items: center;
  gap: ${space[4]};
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
    outline: 2px solid ${alias.focus};
    outline-offset: ${alias.focusOffset};
  }
`;

const Button = ({
  children,
  disabled = false,
  icon,
  onClick,
  semantic = "default",
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $semantic={semantic}
      type={type}
    >
      {icon && <Icon icon={icon} width="24px" height="24px" />}
      {children}
    </StyledButton>
  );
};

export default Button;
