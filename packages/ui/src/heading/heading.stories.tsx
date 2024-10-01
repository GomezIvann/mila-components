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
    <ExampleContainer>
      <Heading level={4}>Fourth level h4</Heading>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={5}>Fifth level h5</Heading>
    </ExampleContainer>
    <ExampleContainer>
      <Heading weight="light">First level h1 bold</Heading>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={2} weight="light">
        Second level h2 bold
      </Heading>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3} weight="light">
        Third level h3 bold
      </Heading>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={4} weight="light">
        Fourth level h4 bold
      </Heading>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={5} weight="light">
        Fifth level h5 bold
      </Heading>
    </ExampleContainer>
  </>
);
