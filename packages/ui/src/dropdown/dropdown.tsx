import { useId, useState } from "react";
import DropdownMenuProps from "./types";
import { styled } from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import ActionButton from "../action-button/action-button";
import Button from "../button/button";

const chevronDown = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
  </svg>
);

const chevronUp = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
  </svg>
);

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
  items,
  label,
  onItemClick,
  triggerType = "primary",
}: DropdownMenuProps) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  const onBlur = () => {
    setIsOpen(false);
  };

  return (
    <StyledDropdownMenu onBlur={onBlur}>
      {triggerType === "action" ? (
        <ActionButton
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={`dropdown-menu-${id}`}
          icon={icon ?? (hideChevron ? undefined : isOpen ? chevronUp : chevronDown)}
          iconPosition="right"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {label}
        </ActionButton>
      ) : (
        <Button
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={`dropdown-menu-${id}`}
          icon={icon ?? (hideChevron ? undefined : isOpen ? chevronUp : chevronDown)}
          iconPosition="right"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          variant={triggerType}
        >
          {label as string}
        </Button>
      )}
      {isOpen && (
        <Menu
          id={`dropdown-menu-${id}`}
          onMouseDown={(event) => {
            // Prevent the onBlur event from closing menu when clicking on the menu
            event.preventDefault();
          }}
        >
          {items.map((item) => (
            <MenuItem
              key={item.value}
              onClick={() => {
                onItemClick(item.value);
                setIsOpen(false);
              }}
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
