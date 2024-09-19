import Button from "./button";
import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";

export default {
  title: "Button",
  component: Button,
};

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Default</Heading>
      <ExampleContainer>
        <Heading level={4}>Enabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button onClick={() => {}}>Primary</Button>
          <Button variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer>
        <Heading level={4}>Disabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button disabled onClick={() => {}}>
            Primary
          </Button>
          <Button disabled variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button disabled variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Heading level={4}>Hover</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button onClick={() => {}}>Primary</Button>
          <Button variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <Heading level={4}>Active</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button onClick={() => {}}>Primary</Button>
          <Button variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Danger</Heading>
      <ExampleContainer>
        <Heading level={4}>Enabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="danger" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="danger" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="danger" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer>
        <Heading level={4}>Disabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="danger" disabled onClick={() => {}}>
            Primary
          </Button>
          <Button
            semantic="danger"
            disabled
            variant="outlined"
            onClick={() => {}}
          >
            Outlined
          </Button>
          <Button semantic="danger" disabled variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Heading level={4}>Hover</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="danger" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="danger" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="danger" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <Heading level={4}>Active</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="danger" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="danger" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="danger" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Info</Heading>
      <ExampleContainer>
        <Heading level={4}>Enabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="info" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="info" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="info" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer>
        <Heading level={4}>Disabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="info" disabled onClick={() => {}}>
            Primary
          </Button>
          <Button
            semantic="info"
            disabled
            variant="outlined"
            onClick={() => {}}
          >
            Outlined
          </Button>
          <Button semantic="info" disabled variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Heading level={4}>Hover</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="info" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="info" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="info" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <Heading level={4}>Active</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="info" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="info" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="info" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Success</Heading>
      <ExampleContainer>
        <Heading level={4}>Enabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="success" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="success" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="success" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer>
        <Heading level={4}>Disabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="success" disabled onClick={() => {}}>
            Primary
          </Button>
          <Button
            semantic="success"
            disabled
            variant="outlined"
            onClick={() => {}}
          >
            Outlined
          </Button>
          <Button semantic="success" disabled variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Heading level={4}>Hover</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="success" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="success" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="success" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <Heading level={4}>Active</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="success" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="success" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="success" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Warning</Heading>
      <ExampleContainer>
        <Heading level={4}>Enabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="warning" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="warning" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="warning" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer>
        <Heading level={4}>Disabled</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="warning" disabled onClick={() => {}}>
            Primary
          </Button>
          <Button
            semantic="warning"
            disabled
            variant="outlined"
            onClick={() => {}}
          >
            Outlined
          </Button>
          <Button semantic="warning" disabled variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Heading level={4}>Hover</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="warning" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="warning" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="warning" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <Heading level={4}>Active</Heading>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button semantic="warning" onClick={() => {}}>
            Primary
          </Button>
          <Button semantic="warning" variant="outlined" onClick={() => {}}>
            Outlined
          </Button>
          <Button semantic="warning" variant="text" onClick={() => {}}>
            Text
          </Button>
        </div>
      </ExampleContainer>
    </ExampleContainer>
  </>
);
