import { IconProp } from "../common/types";

type ActionButtonProps = {
  children?: string;
  disabled?: boolean;
  icon?: IconProp;
  iconPosition?: "left" | "right";
  onClick: () => void;
  title?: string;
  type?: "button" | "submit" | "reset";
};

export default ActionButtonProps;
