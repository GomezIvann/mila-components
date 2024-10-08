import { IconProp } from "../common/types";

type ButtonProps = {
  children: string;
  disabled?: boolean;
  icon?: IconProp;
  iconPosition?: "left" | "right";
  onClick: () => void;
  ref?: React.Ref<HTMLButtonElement>;
  semantic?: "default" | "danger" | "info" | "success" | "warning";
  type?: "button" | "reset" | "submit";
  variant?: "primary" | "outlined" | "text";
};

export default ButtonProps;
