import { useState, useEffect } from "react";
import { ItemAction, Text } from "./item-styles";
import SideNavigationProps, { ItemType } from "./types";
import Icon from "../../common/icon/icon";

const SingleItem = ({ item, onNavigate }: { item: ItemType; onNavigate: SideNavigationProps["onNavigate"] }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(window && window.location.pathname.includes(item.href));
  }, [item.href]);

  return (
    <ItemAction as="a" aria-selected={selected} $selected={selected} onClick={() => onNavigate(item.href)}>
      {item.icon && <Icon icon={item.icon} />}
      <Text $selected={selected}>{item.label}</Text>
    </ItemAction>
  );
};

export default SingleItem;
