import ButtonProps from "../button/types";
import { IconProp } from "../common/types";

type Item = {
  label: string;
  value: string;
};

type CommonProps = {
  hideChevron?: boolean;
  icon?: IconProp;
  iconPosition?: "left" | "right";
  items: Item[];
  onItemClick: (value: string) => void;
};

type DropdownButtonProps = CommonProps & {
  label: string;
  triggerType?: ButtonProps["variant"];
};

type DropdownActionButtonProps = CommonProps & {
  label?: string;
  triggerType: "action";
};

type DropdownMenuProps = DropdownButtonProps | DropdownActionButtonProps;

export default DropdownMenuProps;
