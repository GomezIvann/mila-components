import React from "react";
import { IconProp } from "../../common/types";

type HeaderProps = {
  content?: React.ReactNode;
  navigationLinks?: {
    label: string;
    href: string;
  }[];
  onNavigate?: (href: string) => void;
  title?: {
    icon?: IconProp;
    label?: string;
    href?: string;
  };
};

export default HeaderProps;
