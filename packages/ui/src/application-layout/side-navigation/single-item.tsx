import { useState, useEffect, useContext } from "react";
import { ItemAction } from "./item-styles";
import { ItemType } from "./types";
import Icon from "../../common/icon/icon";
import { SideNavigationContext } from "./side-navigation";

const SingleItem = ({ item, grouped }: { item: ItemType, grouped?: boolean }) => {
  const [selected, setSelected] = useState(false);
  const { onNavigate } = useContext(SideNavigationContext);

  useEffect(() => {
    setSelected(window && window.location.pathname.includes(item.href));
  }, [item.href]);

  return (
    <li>
      <ItemAction as="a" aria-selected={selected} $grouped={grouped} $selected={selected} onClick={() => onNavigate(item.href)} tabIndex={0}>
        {item.icon && <Icon icon={item.icon} />}
        {item.label}
      </ItemAction>
    </li>
  );
};

export default SingleItem;
