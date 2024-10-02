import Badge from "./badge";
import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";

export default {
  title: "Badge",
  component: Badge,
};

const infoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
  </svg>
);

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Default</Heading>
      <Badge>Grey</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="orange">Orange</Badge>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Bordered</Heading>
      <Badge variant="bordered">Grey</Badge>
      <Badge color="purple" variant="bordered">
        Purple
      </Badge>
      <Badge color="blue" variant="bordered">
        Blue
      </Badge>
      <Badge color="green" variant="bordered">
        Green
      </Badge>
      <Badge color="red" variant="bordered">
        Red
      </Badge>
      <Badge color="yellow" variant="bordered">
        Yellow
      </Badge>
      <Badge color="orange" variant="bordered">
        Orange
      </Badge>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>With Icon</Heading>
      <Badge icon={infoIcon}>Grey</Badge>
      <Badge color="purple" icon={infoIcon}>
        Purple
      </Badge>
      <Badge color="blue" icon={infoIcon}>
        Blue
      </Badge>
      <Badge color="green" icon={infoIcon}>
        Green
      </Badge>
      <Badge color="red" icon={infoIcon}>
        Red
      </Badge>
      <Badge color="yellow" icon={infoIcon}>
        Yellow
      </Badge>
      <Badge color="orange" icon={infoIcon}>
        Orange
      </Badge>
    </ExampleContainer>
  </>
);
