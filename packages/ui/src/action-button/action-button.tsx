import { styled } from "styled-components";
import ActionButtonProps from "./types";
import Icon from "../common/icon/icon";
import { color, space, typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";

const StyledActionButton = styled.button`
  box-sizing: border-box;
  border-radius: ${space[4]};
  width: fit-content;
  padding: ${space[8]} ${space[8]};
  display: inline-flex;
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
  }
`;

const ActionButton = ({
  children,
  disabled,
  icon,
  onClick,
  type,
}: ActionButtonProps) => {
  return (
    <StyledActionButton disabled={disabled} onClick={onClick} type={type}>
      {icon && <Icon icon={icon} width="24px" height="24px" />}
      {children}
    </StyledActionButton>
  );
};

export default ActionButton;
