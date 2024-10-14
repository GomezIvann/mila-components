import { forwardRef, useId, useState } from "react";
import TextInputProps from "./types";
import { styled } from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";
import Flex from "../flex/flex";

const Label = styled.label<{ $hasHelpText: boolean }>`
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  color: ${alias.color.text};
  margin-bottom: ${({ $hasHelpText }) => ($hasHelpText ? space[0] : space[4])};

  > strong {
    font-weight: ${typography.weight.semibold};
  }
`;

const HelpText = styled.span`
  font-family: ${typography.family.sans};
  font-size: ${typography.size.xs};
  font-weight: ${typography.weight.normal};
  line-height: ${typography.lineHeight.snug};
  letter-spacing: ${typography.letterSpacing.normal};
  color: ${alias.color.text};
  margin-bottom: ${space[4]};
`;

const StyledTextInput = styled.input<{ $error: boolean }>`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 ${space[12]};
  border: 2px solid ${({ $error }) => ($error ? color.red[500] : color.grey[500])};
  border-radius: ${alias.space.secondaryBorderRadius};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  color: ${alias.color.text};
  background-color: ${color.transparent};
  cursor: text;
  transition: border-color 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus {
    outline: 2px solid ${alias.color.focus};
    outline-offset: ${alias.space.focusOffset};
  }
  &:hover {
    border-color: ${({ $error }) => ($error ? color.red[600] : color.blue[300])};
  }
  &::placeholder {
    color: ${alias.color.text};
    opacity: 0.5;
  }
  &:read-only {
    background-color: ${alias.color.interactiveHover};
  }
  &:disabled::placeholder {
    color: ${alias.color.text};
  }
`;

const ErrorText = styled.span`
  font-family: ${typography.family.sans};
  font-size: ${typography.size.xs};
  font-weight: ${typography.weight.normal};
  line-height: ${typography.lineHeight.snug};
  letter-spacing: ${typography.letterSpacing.normal};
  color: ${color.red[500]};
  margin-top: ${space[4]};
`;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      ariaLabel,
      defaultValue,
      disabled = false,
      error,
      helpText,
      label,
      name,
      onBlur,
      onChange,
      optional = false,
      placeholder,
      readOnly = false,
      type = "text",
      value,
    },
    ref
  ) => {
    const id = useId();
    const [innerValue, setInnerValue] = useState(defaultValue ?? "");

    return (
      <Flex direction="column">
        {label && (
          <Label htmlFor={id} $hasHelpText={Boolean(helpText)}>
            <strong>{label}</strong> {optional && "(optional)"}
          </Label>
        )}
        {helpText && <HelpText id={`${id}-help`}>{helpText}</HelpText>}
        <StyledTextInput
          aria-label={ariaLabel}
          aria-describedby={helpText ? `${id}-help` : error ? `${id}-error` : undefined}
          aria-invalid={Boolean(error)}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={(e) => {
            onBlur?.(e.target.value);
          }}
          onChange={(e) => {
            value ?? setInnerValue(e.target.value);
            onChange?.(e.target.value);
          }}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          required={!optional}
          type={type}
          value={value ?? innerValue}
          $error={Boolean(error)}
        />
        {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
      </Flex>
    );
  }
);

export default TextInput;
