type TextInputProps = {
  ariaLabel?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  label?: string;
  name?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  optional?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  type?: "text" | "password" | "email" | "number";
  value?: string;
};

export default TextInputProps;
