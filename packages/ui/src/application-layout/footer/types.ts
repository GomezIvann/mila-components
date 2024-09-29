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
    title: string;
  }[];
  title?: {
    icon?: IconProp;
    label?: string;
  };
};

export default FooterProps;
