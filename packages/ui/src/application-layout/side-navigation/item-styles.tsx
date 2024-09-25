import styled from "styled-components";
import { color, space, typography } from "../../common/core-tokens";
import alias from "../../common/alias-tokens";

const ItemAction = styled.button<{
  $selected: boolean;
  $grouped?: boolean;
}>`
  border: none;
  border-radius: 4px;
  padding: ${space[8]} ${space[12]} ${space[8]} ${({ $grouped }) => ($grouped ? space[24] : space[12])};
  box-shadow: inset 0 0 0 2px transparent;
  display: flex;
  align-items: center;
  gap: ${space[8]};
  overflow: hidden;
  ${({ $selected }) =>
    $selected ? `background-color: ${color.blue[100]};` : `background-color: ${color.transparent};`};
  color: ${color.grey[900]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.sm};
  font-style: ${typography.style.normal};
  font-weight: ${({ $selected }) => ($selected ? typography.weight.semibold : typography.weight.normal)};
  line-height: ${typography.lineHeight.snug};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    ${({ $selected }) =>
      $selected ? `background-color: ${color.blue[200]};` : `background-color: ${color.grey[100]};`};
  }
  &:active {
    ${({ $selected }) =>
      $selected ? `background-color: ${color.blue[200]};` : `background-color: ${color.grey[100]};`};
  }
  &:focus {
    outline: 2px solid ${alias.focus};
  }
`;

const Text = styled.span<{ $selected: boolean }>`
  color: ${color.grey[900]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.sm};
  font-style: ${typography.style.normal};
  font-weight: ${({ $selected }) => ($selected ? typography.weight.semibold : typography.weight.normal)};
  line-height: ${typography.lineHeight.normal};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export { ItemAction, Text };
