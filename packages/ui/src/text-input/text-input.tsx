import { forwardRef, useState } from "react";
import TextInputProps from "./types";
import { styled } from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";
import Flex from "../flex/flex";

const Label = styled.label`
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.semibold};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  color: ${alias.color.text};
  margin-bottom: ${space[4]};
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
  border: 1px solid ${alias.color.secondaryBorder};
  border-radius: ${alias.space.primaryBorderRadius};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  line-height: ${typography.lineHeight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  color: ${alias.color.text};
  background-color: ${color.white};
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
    border-color: ${color.blue[500]};
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
  ${({ $error }) => $error && `border-color: ${color.red[500]};`}
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
      onChange,
      onBlur,
      optional = false,
      placeholder,
      readOnly = false,
      type,
      value,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState(defaultValue ?? "");

    return (
      <Flex direction="column">
        {label && (
          <Label htmlFor={name}>
            {label} {optional && "(optional)"}
          </Label>
        )}
        {helpText && <HelpText>{helpText}</HelpText>}
        <StyledTextInput
          disabled={disabled}
          name={name}
          readOnly={readOnly}
          ref={ref}
          type={type}
          value={value ?? innerValue}
          aria-label={ariaLabel}
          placeholder={placeholder}
          onChange={(e) => {
            value ?? setInnerValue(e.target.value);
            onChange?.(e.target.value);
          }}
          onBlur={(e) => onBlur?.(e.target.value)}
          $error={Boolean(error)}
        />
        <ErrorText>{error}</ErrorText>
      </Flex>
    );
  }
);

export default TextInput;
