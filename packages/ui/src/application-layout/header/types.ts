import React from "react";
import { IconProp } from "../../common/types";
import { breakpoints } from "../../common/breakpoints";

type HeaderProps = {
  content?: React.ReactNode;
  links?: {
    external?: boolean;
    href: string;
    label: string;
    selected?: boolean;
  }[];
  onNavigate?: (href: string) => void;
  responsiveBreakpoint?: keyof typeof breakpoints;
  title?: {
    href?: string;
    icon?: IconProp;
    label?: string;
  };
};

export default HeaderProps;
