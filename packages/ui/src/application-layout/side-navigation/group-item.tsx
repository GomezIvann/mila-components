import { useState, memo, useId } from "react";
import Icon from "../../common/icon/icon";
import { ItemAction } from "./item-styles";
import { GroupItemType } from "./types";
import icons from "../../common/icons";
import SingleItem from "./single-item";
import Flex from "../../flex/flex";
import { List } from "./side-navigation";

const GroupItem = ({ item }: { item: GroupItemType }) => {
  const groupMenuId = `group-menu-${useId()}`;
  const selected = item.items.some((item) => item.selected);
  const [isOpen, setIsOpen] = useState(selected);

  return (
    <>
      <ItemAction
        as="button"
        aria-controls={groupMenuId}
        aria-expanded={isOpen ? true : false}
        aria-selected={selected && !isOpen}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        $selected={selected && !isOpen}
      >
        <Flex alignItems="center" gap={8}>
          <Icon icon={isOpen ? icons.chevronUp : icons.chevronDown} height="16px" width="16px" />
          {item.icon && <Icon icon={item.icon} height="16px" width="16px" />}
          {item.label}
        </Flex>
      </ItemAction>
      {isOpen && (
        <List id={groupMenuId}>
          {item.items.map((item, index) => (
            <SingleItem item={item} key={`${item.label}-${index}`} grouped />
          ))}
        </List>
      )}
    </>
  );
};

export default memo(GroupItem);
