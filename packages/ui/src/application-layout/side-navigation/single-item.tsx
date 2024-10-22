import { useContext } from "react";
import { ItemAction } from "./item-styles";
import { SingleItemType } from "./types";
import Icon from "../../common/icon/icon";
import { SideNavigationContext } from "./side-navigation";
import icons from "../../common/icons";
import Flex from "../../flex/flex";

const SingleItem = ({ item, grouped }: { item: SingleItemType; grouped?: boolean }) => {
  const onNavigate = useContext(SideNavigationContext);

  return (
    <ItemAction
      aria-current={item.selected ? "page" : undefined}
      href={item.href}
      onClick={
        item.external
          ? undefined
          : (e) => {
              e.preventDefault();
              onNavigate(item.href);
            }
      }
      tabIndex={0}
      target={item.external ? "_blank" : undefined}
      $grouped={grouped}
      $selected={item.selected}
    >
      <Flex alignItems="center" gap={8}>
        {item.icon && <Icon icon={item.icon} height="16px" width="16px" />}
        {item.label}
      </Flex>
      {item.external && <Icon icon={icons.externalLink} height="16px" width="16px" />}
    </ItemAction>
  );
};

export default SingleItem;
