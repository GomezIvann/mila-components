import { useMemo, useState, memo, useId } from "react";
import styled from "styled-components";
import Icon from "../../common/icon/icon";
import { ItemAction } from "./item-styles";
import { GroupItemType, SingleItemType } from "./types";
import { space } from "../../common/core-tokens";
import icons from "../../common/icons";
import SingleItem from "./single-item";
import Flex from "../../flex/flex";

const StyledGroupItem = styled.li`
  display: grid;
  gap: ${space[4]};
`;

const ItemsList = styled.ul`
  padding: 0;
  display: grid;
  gap: ${space[4]};
  list-style: none;
`;

const isGroupSelected = (items: SingleItemType[]) => items.some((item) => window.location.pathname.includes(item.href));

const GroupItem = ({ item }: { item: GroupItemType }) => {
  const groupMenuId = `group-menu-${useId()}`;
  const groupSelected = useMemo(() => isGroupSelected(item.items), [item]);
  const [isOpen, setIsOpen] = useState(groupSelected);

  return (
    <StyledGroupItem>
      <ItemAction
        aria-controls={groupMenuId}
        aria-expanded={isOpen ? true : undefined}
        aria-selected={groupSelected && !isOpen}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        $selected={groupSelected && !isOpen}
      >
        <Flex alignItems="center" gap={8}>
          <Icon icon={isOpen ? icons.chevronUp : icons.chevronDown} height="16px" width="16px" />
          {item.icon && <Icon icon={item.icon} height="16px" width="16px" />}
          {item.label}
        </Flex>
      </ItemAction>
      {isOpen && (
        <ItemsList id={groupMenuId}>
          {item.items.map((item, index) => (
            <SingleItem item={item} key={`${item.label}-${index}`} grouped />
          ))}
        </ItemsList>
      )}
    </StyledGroupItem>
  );
};

export default memo(GroupItem);
