import { useId, useMemo, useState, useRef, useEffect } from "react";
import DropdownMenuProps from "./types";
import { styled } from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import ActionButton from "../action-button/action-button";
import Button from "../button/button";
import icons from "../common/icons";
import alias from "../common/alias-tokens";
import { createPortal } from "react-dom";

const StyledDropdownMenu = styled.div`
  position: relative;
`;

const Menu = styled.ul`
  position: absolute;
  top: 0; /* Initial position, changes dynamically */
  left: 0; /* Initial position, changes dynamically */
  z-index: 2147483647;
  box-sizing: border-box;
  margin: 0;
  min-width: 160px;
  width: fit-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid ${alias.color.primaryBorder};
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
  color: ${alias.color.text};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  line-height: ${typography.lineHeight.tight};
  cursor: pointer;

  &:hover {
    background-color: ${alias.color.interactiveHover};
  }
  &:active {
    background-color: ${alias.color.interactiveActive};
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
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null); // Ref para el menú

  const commonTriggerProps = useMemo(
    () => ({
      id: `dropdown-trigger-${id}`,
      "aria-haspopup": true,
      "aria-expanded": isOpen,
      "aria-controls": `dropdown-menu-${id}`,
      icon: icon ?? (hideChevron ? undefined : isOpen ? icons.chevronUp : icons.chevronDown),
      iconPosition,
      onClick: () => setIsOpen((prev) => !prev),
    }),
    [hideChevron, icon, iconPosition, id, isOpen]
  );

  const onBlur = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && triggerRef.current && menuRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();

      const top = triggerRect.bottom + 4; // 4px gap
      const left = triggerRect.left + triggerRect.width / 2 - menuRect.width / 2; // Center the menu

      setMenuPosition({ top, left });
    }
  }, [isOpen]);

  return (
    <StyledDropdownMenu onBlur={onBlur}>
      {triggerType === "action" ? (
        <ActionButton title={label == null ? "Display items" : undefined} ref={triggerRef} {...commonTriggerProps}>
          {label}
        </ActionButton>
      ) : (
        <Button variant={triggerType} ref={triggerRef} {...commonTriggerProps}>
          {label as string}
        </Button>
      )}
      {isOpen &&
        createPortal(
          isOpen ? (
            <Menu
              aria-labelledby={`dropdown-trigger-${id}`}
              id={`dropdown-menu-${id}`}
              onMouseDown={(event) => {
                // Prevent focus loss from the trigger
                event.preventDefault();
              }}
              ref={menuRef}
              role="menu"
              style={{ top: menuPosition.top, left: menuPosition.left }}
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
          ) : null,
          document.body
        )}
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
