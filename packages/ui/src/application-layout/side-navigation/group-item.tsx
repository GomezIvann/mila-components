import { useMemo, useState, memo, useId } from "react";
import styled from "styled-components";
import Icon from "../../common/icon/icon";
import { ItemAction } from "./item-styles";
import SideNavigationProps, { GroupItemType, ItemType } from "./types";
import { space } from "../../common/core-tokens";
import icons from "../../common/icons";
import SingleItem from "./single-item";

const ItemsList = styled.ul`
  padding: 0;
  display: grid;
  gap: ${space[4]};
  list-style: none;
`;

const isGroupSelected = (items: ItemType[]) => items.some((item) => window.location.pathname.includes(item.href));

const GroupItem = ({ item, onNavigate }: { item: GroupItemType; onNavigate: SideNavigationProps["onNavigate"] }) => {
  const groupMenuId = `group-menu-${useId()}`;
  const groupSelected = useMemo(() => isGroupSelected(item.items), [item]);
  const [isOpen, setIsOpen] = useState(groupSelected);

  return (
    <>
      <ItemAction
        aria-controls={groupMenuId}
        aria-expanded={isOpen ? true : undefined}
        aria-selected={groupSelected && !isOpen}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        $group
        $selected={groupSelected && !isOpen}
      >
        <Icon icon={isOpen ? icons.chevronUp : icons.chevronDown} />
        {item.icon && <Icon icon={item.icon} />}
        {item.label}
      </ItemAction>
      {isOpen && (
        <ItemsList id={groupMenuId}>
          {item.items.map((item) => (
            <li key={item.label}>
              <SingleItem item={item} onNavigate={onNavigate} />
            </li>
          ))}
        </ItemsList>
      )}
    </>
  );
};

export default memo(GroupItem);
