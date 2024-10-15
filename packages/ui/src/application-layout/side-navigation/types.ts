import { breakpoints } from "../../common/breakpoints";
import { IconProp } from "../../common/types";

type SingleItemType = {
  external?: boolean;
  href: string;
  icon?: IconProp;
  label: string;
  selected?: boolean;
};
type GroupItemType = {
  icon?: IconProp;
  items: SingleItemType[];
  label: string;
};
type SectionType = { items: (SingleItemType | GroupItemType)[]; title?: string };

type SideNavigationProps = {
  items: (SingleItemType | GroupItemType)[] | SectionType[];
  onNavigate: (href: string) => void;
  responsiveBreakpoint?: keyof typeof breakpoints;
  title?: {
    icon?: IconProp;
    text?: string;
  };
};

type SideNavigationWrapperProps = {
  children: React.ReactNode;
  condition: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default SideNavigationProps;
export type { GroupItemType, SectionType, SideNavigationWrapperProps, SingleItemType };
