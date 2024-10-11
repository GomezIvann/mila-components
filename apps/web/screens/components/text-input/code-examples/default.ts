import { TextInput } from "mila-components";

const code = `() => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleOnChange = (value: string) => {
    setValue(value);
  }
  const handleOnBlur = (value: string) => {
    if (!value) setError("This field is required.");
    else setError("");
  };

  return (
    <TextInput
      value={value}
      error={error}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      helperText="This is a helper text"
      label="Enter your name"
      placeholder="John Doe"
    />
  );
}`;

const scope = { TextInput };

export default { code, scope };
