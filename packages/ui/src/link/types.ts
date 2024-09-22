import { IconProp } from "../common/types";

type LinkProps = {
  children: string;
  href?: string;
  newWindow?: boolean;
  onClick?: () => void;
  icon?: IconProp;
};

export default LinkProps;
