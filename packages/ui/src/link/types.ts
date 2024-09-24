import { IconProp } from "../common/types";

type LinkProps = {
  children: string;
  disabled?: boolean;
  href?: string;
  icon?: IconProp;
  inheritStyles?: boolean;
  newWindow?: boolean;
  onClick?: () => void;
};

export default LinkProps;
