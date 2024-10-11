type TextInputProps = {
  ariaLabel?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  label?: string;
  name?: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
  optional?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  type?: "email" | "number" | "password" | "tel" | "text" | "url";
  value?: string;
};

export default TextInputProps;
