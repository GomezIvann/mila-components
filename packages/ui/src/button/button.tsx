"use client";

import styled from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import ButtonProps from "./types";

type SemanticColors = "red" | "blue" | "green" | "orange" | "grey";

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
      return "orange";
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

  switch (variant) {
    case "outlined":
      return `
        background-color: transparent;
        color: ${color[semanticColor][500]};
        border: 1px solid ${color[semanticColor][500]};
        &:hover {
          background-color: ${color[semanticColor][50]};
        }
      `;
    case "text":
      return `
        background-color: transparent;
        color: ${color[semanticColor][500]};
        border: none;
        &:hover {
          background-color: ${color[semanticColor][50]};
        }
      `;
    case "primary":
    default:
      return `
        background-color: ${color[semanticColor][500]};
        color: white;
        border: none;
        &:hover {
          background-color: ${color[semanticColor][600]};
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
  gap: ${space[8]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.semibold};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};

  padding: ${space[8]} ${space[20]};
  border-radius: ${space[128]};
  cursor: pointer;

  ${({ variant, semantic }) => getButtonStyles(variant, semantic)};

  &:disabled {
    background-color: ${color.grey[300]};
    color: ${color.grey[600]};
    cursor: not-allowed;
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
