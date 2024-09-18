import ExampleContainer from "../../.storybook/utils/example-container";
import Heading from "./heading";

export default {
  title: "Heading",
  component: Heading,
};

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading>First level h1</Heading>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={2}>Second level h2</Heading>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Third level h3</Heading>
    </ExampleContainer>
  </>
);
