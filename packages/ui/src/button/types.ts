type ButtonProps = {
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "outlined" | "text";
  type?: "button" | "reset" | "submit";
  semantic?: "default" | "danger" | "info" | "success" | "warning";
  children: string;
};

export default ButtonProps;
