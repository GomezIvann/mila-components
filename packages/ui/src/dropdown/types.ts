import ButtonProps from "../button/types";
import { IconProp } from "../common/types";

type Item = {
  label: string;
  value: string;
};

type DropdownMenuProps = {
  triggerType?: ButtonProps["variant"] | "action";
  items: Item[];
  label: string;
  onItemSelect: (value: string) => void;
};

export type TriggerProps = {
  label: DropdownMenuProps["label"];
  triggerType: DropdownMenuProps["triggerType"];
  icon: IconProp;
  onClick: () => void;
};

export default DropdownMenuProps;
