import { IconProp } from "../common/types";

type ActionButtonProps = {
  children?: string;
  disabled?: boolean;
  icon?: IconProp;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

export default ActionButtonProps;