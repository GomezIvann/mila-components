import Link from "./link";
import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";

export default {
  title: "Link",
  component: Link,
};

export const Stories = () => (
  <ExampleContainer>
    <Heading level={3}>Default</Heading>
    <Link href="#">Link</Link>
  </ExampleContainer>
);
