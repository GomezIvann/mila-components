import { IconProp } from "../common/types";

type BadgeProps = {
  children: React.ReactNode;
  color?: "grey" | "purple" | "blue" | "green" | "red" | "yellow" | "orange";
  icon?: IconProp;
  title?: string;
  variant?: "default" | "bordered";
};

export default BadgeProps;
