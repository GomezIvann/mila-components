import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";
import TextInput from "./text-input";

export default {
  title: "Text Input",
  component: TextInput,
};

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Default</Heading>
      <TextInput />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>With label</Heading>
      <TextInput label="Label" />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>With label and optional</Heading>
      <TextInput label="Label" optional />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>With placeholder</Heading>
      <TextInput placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>With label, help text and placeholder</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>With error</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" error="Error message" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Heading level={3}>Hovered with error</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" error="Error message" />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Disabled</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Read only</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" readOnly />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Password</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" type="password" />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Email</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" type="email" />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Number</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" type="number" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Heading level={3}>Hovered</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Heading level={3}>Focused</Heading>
      <TextInput label="Label" helpText="Help text" placeholder="Placeholder" />
    </ExampleContainer>
  </>
);
