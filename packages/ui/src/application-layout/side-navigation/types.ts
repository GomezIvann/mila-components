import { breakpoints } from "../../common/breakpoints";
import { IconProp } from "../../common/types";

type ItemType = {
  icon?: IconProp;
  label: string;
  href: string;
};
type GroupItemType = {
  icon?: IconProp;
  label: string;
  items: ItemType[];
  collapsable?: boolean;
};
type Section = { items: (ItemType | GroupItemType)[]; title?: string };

type SideNavigationProps = {
  items: (ItemType | GroupItemType)[] | Section[];
  onNavigate: (href: string) => void;
  responsiveBreakpoint?: keyof typeof breakpoints;
  title?: {
    icon?: IconProp;
    label?: string;
    href?: string;
  };
};

export default SideNavigationProps;

export type { ItemType, GroupItemType, Section };
