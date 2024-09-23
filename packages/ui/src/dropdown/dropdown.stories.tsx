import ExampleContainer from "../../.storybook/utils/example-container";
import Heading from "../heading/heading";
import Dropdown from "./dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const items = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Default</Heading>
      <Dropdown items={items} onItemClick={(item) => console.log(item)} label="Dropdown" />
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Trigger type</Heading>
      <Dropdown items={items} onItemClick={(item) => console.log(item)} label="Dropdown" triggerType="action" />
    </ExampleContainer>
  </>
);
