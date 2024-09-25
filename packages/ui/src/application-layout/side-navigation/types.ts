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
type SectionType = { items: (ItemType | GroupItemType)[]; title?: string };

type SideNavigationProps = {
  items: (ItemType | GroupItemType | SectionType)[] ;
  onNavigate: (href: string) => void;
  responsiveBreakpoint?: keyof typeof breakpoints;
  title?: {
    icon?: IconProp;
    label?: string;
  };
};

export default SideNavigationProps;

export type { ItemType, GroupItemType, SectionType };
