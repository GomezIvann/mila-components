import { styled } from "styled-components";
import ActionButtonProps from "./types";
import Icon from "../common/icon/icon";
import { color, space, typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";

const StyledActionButton = styled.button<{
  $hasIcon: boolean;
  $hasLabel: boolean;
  $iconPosition: ActionButtonProps["iconPosition"];
}>`
  box-sizing: border-box;
  border-radius: ${space[4]};
  width: fit-content;

  ${({ $hasIcon, $hasLabel, $iconPosition }) => {
    if (!$hasIcon) return `padding: ${space[8]} ${space[16]};`;
    else {
      if (!$hasLabel) return `padding: ${space[8]};`;
      else {
        if ($iconPosition === "left") return `padding: ${space[8]} ${space[16]} ${space[8]} ${space[12]};`;
        else return `padding: ${space[8]} ${space[12]} ${space[8]} ${space[16]};`;
      }
    }
  }}

  display: inline-flex;
  ${({ $iconPosition }) => $iconPosition === "right" && "flex-direction: row-reverse;"}
  align-items: center;
  gap: ${space[4]};
  background-color: ${color.transparent};
  color: ${color.grey[900]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.semibold};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  white-space: nowrap;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: ${color.grey[200]};
  }
  &:not(:disabled):active {
    background-color: ${color.grey[300]};
  }
  &:not(:disabled):focus {
    outline: 2px solid ${alias.focus};
    outline-offset: ${alias.focusOffset};
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
    $hasIcon={Boolean(icon)}
    $hasLabel={Boolean(children)}
    $iconPosition={iconPosition}
    onClick={onClick}
    title={title}
    type={type}
    {...rest}
  >
    {icon && <Icon icon={icon} width="24px" height="24px" />}
    {children && <span>{children}</span>}
  </StyledActionButton>
);

export default ActionButton;
