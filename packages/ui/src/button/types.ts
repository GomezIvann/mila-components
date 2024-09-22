import { IconProp } from "../common/types";

type ButtonProps = {
  disabled?: boolean;
  icon?: IconProp;
  onClick: () => void;
  variant?: "primary" | "outlined" | "text";
  type?: "button" | "reset" | "submit";
  semantic?: "default" | "danger" | "info" | "success" | "warning";
  children: string;
};

export default ButtonProps;
