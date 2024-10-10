import { IconProp } from "../common/types";

type LinkProps = {
  children: string;
  disabled?: boolean;
  href?: string;
  icon?: IconProp;
  newWindow?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default LinkProps;
