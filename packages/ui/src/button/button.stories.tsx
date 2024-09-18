import Button from "./button";
import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";

export default {
  title: "Button",
  component: Button,
};

export const Stories = () => (
  <>
    <Heading level={2}>Default</Heading>
    <ExampleContainer>
      <Heading level={3}>Primary</Heading>
      <Button onClick={() => {}}>Primary</Button>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Outlined</Heading>
      <Button variant="outlined" onClick={() => {}}>
        Primary
      </Button>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Text</Heading>
      <Button variant="text" onClick={() => {}}>
        Primary
      </Button>
    </ExampleContainer>
  </>
);
