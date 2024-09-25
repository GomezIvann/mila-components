import { useState, useEffect, useContext } from "react";
import { ItemAction } from "./item-styles";
import { SingleItemType } from "./types";
import Icon from "../../common/icon/icon";
import { SideNavigationContext } from "./side-navigation";
import icons from "../../common/icons";
import Flex from "../../flex/flex";

const SingleItem = ({ item, grouped }: { item: SingleItemType; grouped?: boolean }) => {
  const [selected, setSelected] = useState(false);
  const { onNavigate } = useContext(SideNavigationContext);

  useEffect(() => {
    setSelected(window && window.location.pathname.includes(item.href));
  }, [item.href]);

  return (
    <li>
      <ItemAction
        as="a"
        aria-selected={selected}
        href={item.external ? item.href : undefined}
        target={item.external ? "_blank" : undefined}
        onClick={() => onNavigate(item.href)}
        tabIndex={0}
        $grouped={grouped}
        $selected={selected}
      >
        <Flex alignItems="center" gap={8}>
          {item.icon && <Icon icon={item.icon} height="16px" width="16px" />}
          {item.label}
        </Flex>
        {item.external && <Icon icon={icons.externalLink} height="16px" width="16px" />}
      </ItemAction>
    </li>
  );
};

export default SingleItem;
