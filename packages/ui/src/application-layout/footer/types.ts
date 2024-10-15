import { IconProp } from "../../common/types";

type FooterProps = {
  content?: React.ReactNode;
  copyright?: string;
  links?: {
    href: string;
    label: string;
  }[];
  socialIcons?: {
    icon: IconProp;
    href: string;
    title: string;
  }[];
  title?: {
    icon?: IconProp;
    text?: string;
  };
};

export default FooterProps;
