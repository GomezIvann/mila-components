import { breakpoints } from "../../common/breakpoints";
import { IconProp } from "../../common/types";

type SingleItemType = {
  icon?: IconProp;
  label: string;
  href: string;
  external?: boolean;
};
type GroupItemType = {
  icon?: IconProp;
  label: string;
  items: SingleItemType[];
  collapsable?: boolean;
};
type SectionType = { items: (SingleItemType | GroupItemType)[]; title?: string };

type SideNavigationProps = {
  items: (SingleItemType | GroupItemType)[] | SectionType[];
  onNavigate: (href: string) => void;
  responsiveBreakpoint?: keyof typeof breakpoints;
  title?: {
    icon?: IconProp;
    label?: string;
  };
};

export default SideNavigationProps;

export type { SingleItemType, GroupItemType, SectionType };
