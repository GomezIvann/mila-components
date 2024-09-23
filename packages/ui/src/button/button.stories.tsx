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
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor">
    <path d="M796-121 533-384q-30 26-69.96 40.5Q423.08-329 378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z" />
  </svg>
);

const catIconUrl = "https://i.pinimg.com/originals/4c/b2/bd/4cb2bd1dfcd2ff8a0952504f5907eeda.png";

const SemanticExamples = ({ semantic }: { semantic: Required<ButtonProps>["semantic"] }) => (
  <ExampleContainer>
    <Heading level={3}>{semantic.charAt(0).toUpperCase() + semantic.slice(1)}</Heading>
    <ExampleContainer>
      <Heading level={4}>Enabled</Heading>
      <Flex gap={32}>
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
      <Flex gap={32}>
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
      <Flex gap={32}>
        <Button semantic={semantic} disabled onClick={() => {}}>
          Primary
        </Button>
        <Button semantic={semantic} disabled variant="outlined" onClick={() => {}}>
          Outlined
        </Button>
        <Button semantic={semantic} disabled variant="text" onClick={() => {}}>
          Text
        </Button>
      </Flex>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Heading level={4}>Hover</Heading>
      <Flex gap={32}>
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
      <Flex gap={32}>
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
      <Heading level={4}>With icon (before)</Heading>
      <Flex gap={32}>
        <Button semantic={semantic} onClick={() => {}} icon={searchIcon}>
          Primary
        </Button>
        <Button semantic={semantic} variant="outlined" onClick={() => {}} icon={catIconUrl}>
          Outlined
        </Button>
        <Button semantic={semantic} variant="text" onClick={() => {}} icon={searchIcon}>
          Text
        </Button>
      </Flex>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={4}>With icon (after)</Heading>
      <Flex gap={32}>
        <Button semantic={semantic} onClick={() => {}} icon={catIconUrl} iconPosition="right">
          Primary
        </Button>
        <Button semantic={semantic} variant="outlined" onClick={() => {}} icon={searchIcon} iconPosition="right">
          Outlined
        </Button>
        <Button semantic={semantic} variant="text" onClick={() => {}} icon={catIconUrl} iconPosition="right">
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
