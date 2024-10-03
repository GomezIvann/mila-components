import { IconProp } from "../common/types";

type ActionButtonProps = {
  children?: string;
  disabled?: boolean;
  icon?: IconProp;
  iconPosition?: "left" | "right";
  onClick: () => void;
  ref?: React.Ref<HTMLButtonElement>;
  title?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outlined";
};

export default ActionButtonProps;
