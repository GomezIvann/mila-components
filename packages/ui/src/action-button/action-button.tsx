import { styled } from "styled-components";
import ActionButtonProps from "./types";
import Icon from "../common/icon/icon";
import { color, space, typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";

export const StyledActionButton = styled.button<{
  $hasIcon: boolean;
  $hasLabel: boolean;
  $iconPosition: ActionButtonProps["iconPosition"];
}>`
  box-sizing: border-box;
  border: none;
  border-radius: ${alias.space.borderRadius};
  width: fit-content;

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
  background-color: ${color.transparent};
  color: ${alias.color.text};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.semibold};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;

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

const ActionButton = ({
  children,
  disabled,
  icon,
  iconPosition = "left",
  onClick,
  title,
  type,
  ...rest
}: ActionButtonProps) => (
  <StyledActionButton
    aria-label={title}
    disabled={disabled}
    onClick={onClick}
    title={title}
    type={type}
    $hasIcon={Boolean(icon)}
    $hasLabel={Boolean(children)}
    $iconPosition={iconPosition}
    {...rest}
  >
    {icon && <Icon icon={icon} height="24px" width="24px" />}
    {children && <span>{children}</span>}
  </StyledActionButton>
);

export default ActionButton;
