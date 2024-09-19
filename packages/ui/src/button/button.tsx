import styled from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import ButtonProps from "./types";

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
  variant: string;
  semantic: Required<ButtonProps>["semantic"];
}>`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: ${space[8]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.semibold};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  padding: ${space[8]} ${space[20]};
  border-radius: ${space[64]};
  cursor: pointer;

  ${({ variant, semantic }) => getButtonStyles(variant, semantic)};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus {
    outline: 2px solid ${color.blue[400]};
    outline-offset: 2px;
  }
`;

const Button = ({
  disabled = false,
  icon,
  onClick,
  variant = "primary",
  type = "button",
  semantic = "default",
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      semantic={semantic}
      type={type}
    >
      {icon && <span>{icon}</span>}
      {children}
    </StyledButton>
  );
};

export default Button;
