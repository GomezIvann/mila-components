import { IconProp } from "../../common/types";

type FooterProps = {
  content?: React.ReactNode;
  copyright?: string;
  links?: {
    label: string;
    href: string;
  }[];
  socialIcons?: {
    icon: IconProp;
    href: string;
  }[];
  title?: {
    icon?: IconProp;
    label?: string;
    href?: string;
  };
};

export default FooterProps;
