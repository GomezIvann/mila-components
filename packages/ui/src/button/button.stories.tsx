import Button from "./button";
import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";
import Flex from "../flex/flex";
import ButtonProps from "./types";

export default {
  title: "Button",
  component: Button,
};

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
  </svg>
);

const SemanticExamples = ({
  semantic,
}: {
  semantic: Required<ButtonProps>["semantic"];
}) => (
  <ExampleContainer>
    <Heading level={3}>
      {semantic.charAt(0).toUpperCase() + semantic.slice(1)}
    </Heading>
    <ExampleContainer>
      <Heading level={4}>Enabled</Heading>
      <Flex gap="2rem">
        <Button semantic={semantic} onClick={() => {}}>
          Primary
        </Button>
        <Button semantic={semantic} variant="outlined" onClick={() => {}}>
          Outlined
        </Button>
        <Button semantic={semantic} variant="text" onClick={() => {}}>
          Text
        </Button>
      </Flex>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Heading level={4}>Focused</Heading>
      <Flex gap="2rem">
        <Button semantic={semantic} onClick={() => {}}>
          Primary
        </Button>
        <Button semantic={semantic} variant="outlined" onClick={() => {}}>
          Outlined
        </Button>
        <Button semantic={semantic} variant="text" onClick={() => {}}>
          Text
        </Button>
      </Flex>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={4}>Disabled</Heading>
      <Flex gap="2rem">
        <Button semantic={semantic} disabled onClick={() => {}}>
          Primary
        </Button>
        <Button
          semantic={semantic}
          disabled
          variant="outlined"
          onClick={() => {}}
        >
          Outlined
        </Button>
        <Button semantic={semantic} disabled variant="text" onClick={() => {}}>
          Text
        </Button>
      </Flex>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Heading level={4}>Hover</Heading>
      <Flex gap="2rem">
        <Button semantic={semantic} onClick={() => {}}>
          Primary
        </Button>
        <Button semantic={semantic} variant="outlined" onClick={() => {}}>
          Outlined
        </Button>
        <Button semantic={semantic} variant="text" onClick={() => {}}>
          Text
        </Button>
      </Flex>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Heading level={4}>Active</Heading>
      <Flex gap="2rem">
        <Button semantic={semantic} onClick={() => {}}>
          Primary
        </Button>
        <Button semantic={semantic} variant="outlined" onClick={() => {}}>
          Outlined
        </Button>
        <Button semantic={semantic} variant="text" onClick={() => {}}>
          Text
        </Button>
      </Flex>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={4}>With icon</Heading>
      <Flex gap="2rem">
        <Button semantic={semantic} onClick={() => {}} icon={searchIcon}>
          Primary
        </Button>
        <Button
          semantic={semantic}
          variant="outlined"
          onClick={() => {}}
          icon={searchIcon}
        >
          Outlined
        </Button>
        <Button
          semantic={semantic}
          variant="text"
          onClick={() => {}}
          icon={searchIcon}
        >
          Text
        </Button>
      </Flex>
    </ExampleContainer>
  </ExampleContainer>
);

export const Stories = () => (
  <>
    <SemanticExamples semantic="default" />
    <SemanticExamples semantic="danger" />
    <SemanticExamples semantic="info" />
    <SemanticExamples semantic="success" />
    <SemanticExamples semantic="warning" />
  </>
);
