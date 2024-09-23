import ButtonProps from "../button/types";
import { IconProp } from "../common/types";

type Item = {
  label: string;
  value: string;
};

type DropdownButtonProps = {
  hideChevron?: boolean;
  icon?: IconProp;
  items: Item[];
  label: string;
  onItemClick: (value: string) => void;
  triggerType?: ButtonProps["variant"];
};

type DropdownActionButtonProps = {
  hideChevron?: boolean;
  icon?: IconProp;
  items: Item[];
  label?: string;
  onItemClick: (value: string) => void;
  triggerType: "action";
};

type DropdownMenuProps = DropdownButtonProps | DropdownActionButtonProps;

export default DropdownMenuProps;
