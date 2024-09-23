import { IconProp } from "../common/types";

type LinkProps = {
  children: string;
  disabled?: boolean;
  href?: string;
  newWindow?: boolean;
  onClick?: () => void;
  icon?: IconProp;
};

export default LinkProps;
