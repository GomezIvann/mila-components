import styled from "styled-components";
import { color, space, typography } from "../../common/core-tokens";
import alias from "../../common/alias-tokens";

export const ItemAction = styled.a<{
  $selected?: boolean;
  $grouped?: boolean;
}>`
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: ${space[8]} ${space[12]} ${space[8]} ${({ $grouped }) => ($grouped ? space[32] : space[8])};
  width: 100%;
  box-shadow: inset 0 0 0 2px transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${space[8]};
  ${({ $selected }) =>
    $selected ? `background-color: ${alias.color.selected};` : `background-color: ${color.transparent};`};
  color: ${({ $selected }) => ($selected ? alias.color.selectedText : alias.color.text)};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.sm};
  font-style: ${typography.style.normal};
  font-weight: ${({ $selected }) => ($selected ? typography.weight.semibold : typography.weight.normal)};
  line-height: ${typography.lineHeight.normal};
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  user-select: none;

  &:hover {
    ${({ $selected }) =>
      $selected
        ? `background-color: ${alias.color.hoverSelected};`
        : `background-color: ${alias.color.interactiveHover};`};
  }
  &:active {
    ${({ $selected }) =>
      $selected
        ? `background-color: ${alias.color.hoverSelected};`
        : `background-color: ${alias.color.interactiveHover};`};
  }
  &:focus {
    outline: 2px solid ${alias.color.focus};
  }
`;
