import { useState } from "react";
import ActionButton from "../action-button/action-button";
import DropdownMenuProps, { TriggerProps } from "./types";
import Button from "../button/button";
import { styled } from "styled-components";

const chevronDown = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
  </svg>
);

const chevronUp = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
  </svg>
);

const StyledDropdownMenu = styled.ul`
  position: relative;
`;

const Menu = styled.li`
  position: absolute;
`;

const MenuItem = styled.div``;

const TriggerButton = ({ label, triggerType, icon, onClick }: TriggerProps) => (
  <>
    {triggerType === "action" ? (
      <ActionButton icon={icon} onClick={onClick} iconPosition="right">
        {label}
      </ActionButton>
    ) : (
      <Button variant={triggerType} onClick={onClick} icon={icon} iconPosition="right">
        {label}
      </Button>
    )}
  </>
);

const DropdownMenu = ({ label, items, onItemSelect, triggerType }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDropdownMenu>
      <TriggerButton
        label={label}
        triggerType={triggerType}
        icon={isOpen ? chevronDown : chevronUp}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />
      {isOpen && (
        <Menu>
          {items.map((item) => (
            <MenuItem
              key={item.value}
              onClick={() => {
                onItemSelect(item.value);
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
