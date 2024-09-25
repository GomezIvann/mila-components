import { useId, useMemo, useState } from "react";
import DropdownMenuProps from "./types";
import { styled } from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import ActionButton from "../action-button/action-button";
import Button from "../button/button";
import icons from "../common/icons";

const StyledDropdownMenu = styled.div`
  position: relative;
`;

const Menu = styled.ul`
  position: absolute;
  top: calc(100% + ${space[4]});
  z-index: 2147483647;
  box-sizing: border-box;
  margin: 0;
  min-width: 160px;
  width: fit-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid ${color.grey[200]};
  border-radius: ${space[8]};
  padding: ${space[4]};
  background-color: ${color.white};
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${space[2]};
`;

const MenuItem = styled.li`
  border-radius: ${space[8]};
  padding: ${space[8]} ${space[12]};
  display: flex;
  align-items: center;
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  line-height: ${typography.lineHeight.tight};
  color: ${color.grey[900]};
  cursor: pointer;

  &:hover {
    background-color: ${color.grey[100]};
  }
  &:active {
    background-color: ${color.grey[200]};
  }
`;

const DropdownMenu = ({
  hideChevron = false,
  icon,
  iconPosition = "right",
  items,
  label,
  onItemClick,
  triggerType = "primary",
}: DropdownMenuProps) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  const commonTriggerProps = useMemo(
    () => ({
      id: `dropdown-trigger-${id}`,
      "aria-haspopup": true,
      "aria-expanded": isOpen,
      "aria-controls": `dropdown-menu-${id}`,
      icon: icon ?? (hideChevron ? undefined : isOpen ? icons.chevronUp : icons.chevronDown),
      iconPosition,
      onClick: () => setIsOpen((isOpen) => !isOpen),
    }),
    [hideChevron, icon, iconPosition, id, isOpen]
  );

  const onBlur = () => {
    setIsOpen(false);
  };

  return (
    <StyledDropdownMenu onBlur={onBlur}>
      {triggerType === "action" ? (
        <ActionButton title={label == null ? "Display items" : undefined} {...commonTriggerProps}>
          {label}
        </ActionButton>
      ) : (
        <Button variant={triggerType} {...commonTriggerProps}>
          {label as string}
        </Button>
      )}
      {isOpen && (
        <Menu
          aria-labelledby={`dropdown-trigger-${id}`}
          id={`dropdown-menu-${id}`}
          onMouseDown={(event) => {
            // Prevent the menu from stealing the focus from the trigger
            event.preventDefault();
          }}
          role="menu"
        >
          {items.map((item) => (
            <MenuItem
              key={item.value}
              onClick={() => {
                onItemClick(item.value);
                setIsOpen(false);
              }}
              role="menuitem"
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
