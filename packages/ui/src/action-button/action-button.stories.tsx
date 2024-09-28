import ExampleContainer from "../../.storybook/utils/example-container";
import Heading from "../heading/heading";
import ActionButton from "./action-button";

export default {
  title: "Action button",
  component: ActionButton,
};

const pencilIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor">
    <path d="M180-180h44l472-471-44-44-472 471v44Zm-60 60v-128l575-574q8-8 19-12.5t23-4.5q11 0 22 4.5t20 12.5l44 44q9 9 13 20t4 22q0 11-4.5 22.5T823-694L248-120H120Zm659-617-41-41 41 41Zm-105 64-22-22 44 44-22-22Z" />
  </svg>
);

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Default</Heading>
      <ActionButton onClick={() => {}}>Edit</ActionButton>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Bordered</Heading>
      <ActionButton onClick={() => {}} variant="bordered">
        Edit
      </ActionButton>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Icon only</Heading>
      <ActionButton icon={pencilIcon} onClick={() => {}} title="Edit" />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Icon (before) and label</Heading>
      <ActionButton icon={pencilIcon} onClick={() => {}}>
        Edit
      </ActionButton>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Icon (after) and label</Heading>
      <ActionButton icon={pencilIcon} iconPosition="right" onClick={() => {}}>
        Edit
      </ActionButton>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Heading level={3}>Focused</Heading>
      <ActionButton onClick={() => {}}>Edit</ActionButton>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Heading level={3}>Hovered</Heading>
      <ActionButton onClick={() => {}}>Edit</ActionButton>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Heading level={3}>Active</Heading>
      <ActionButton onClick={() => {}}>Edit</ActionButton>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Disabled</Heading>
      <ActionButton disabled onClick={() => {}}>
        Edit
      </ActionButton>
    </ExampleContainer>
  </>
);
