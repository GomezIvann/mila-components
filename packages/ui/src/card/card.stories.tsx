import Card from "./card";
import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";
import Flex from "../flex/flex";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";

export default {
  title: "Card",
  component: Card,
};

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Default</Heading>
      <div style={{ width: 500 }}>
        <Card
          actions={
            <Flex gap={8} justifyContent="flex-end">
              <Button onClick={() => {}}>First</Button>
              <Button onClick={() => {}} variant="text">
                Second
              </Button>
            </Flex>
          }
          content={
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis architecto dignissimos. Sequi ut,
              blanditiis amet, cum deserunt, nihil saepe doloremque error nobis id itaque dicta culpa alias vel sint!
            </Paragraph>
          }
          media={{
            source: (
              <img
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                alt="placeholder"
                width={500}
                height={300}
              />
            ),
          }}
          title="Card title"
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Outlined</Heading>
      <div style={{ width: 500 }}>
        <Card
          actions={
            <Flex gap={8} justifyContent="flex-end">
              <Button onClick={() => {}}>First</Button>
              <Button onClick={() => {}} variant="text">
                Second
              </Button>
            </Flex>
          }
          content={
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis architecto dignissimos. Sequi ut,
              blanditiis amet, cum deserunt, nihil saepe doloremque error nobis id itaque dicta culpa alias vel sint!
            </Paragraph>
          }
          media={{
            position: "right",
            source: (
              <img
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                alt="placeholder"
                width={200}
              />
            ),
          }}
          title="Card title"
          variant="outlined"
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Interactive</Heading>
      <div style={{ width: 500 }}>
        <Card
          actions={
            <Flex gap={8} justifyContent="flex-end">
              <Button onClick={() => {}}>First</Button>
              <Button onClick={() => {}} variant="text">
                Second
              </Button>
            </Flex>
          }
          content={
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis architecto dignissimos. Sequi ut,
              blanditiis amet, cum deserunt, nihil saepe doloremque error nobis id itaque dicta culpa alias vel sint!
            </Paragraph>
          }
          media={{
            position: "bottom",
            source: (
              <img
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                alt="placeholder"
                width={500}
                height={300}
              />
            ),
          }}
          onClick={() => {}}
          title="Card title"
        />
      </div>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Heading level={3}>Interactive focused</Heading>
      <div style={{ width: 500 }}>
        <Card
          actions={
            <Flex gap={8} justifyContent="flex-end">
              <Button onClick={() => {}}>First</Button>
              <Button onClick={() => {}} variant="text">
                Second
              </Button>
            </Flex>
          }
          content={
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis architecto dignissimos. Sequi ut,
              blanditiis amet, cum deserunt, nihil saepe doloremque error nobis id itaque dicta culpa alias vel sint!
            </Paragraph>
          }
          media={{
            position: "left",
            source: (
              <img
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                alt="placeholder"
                width={200}
              />
            ),
          }}
          onClick={() => {}}
          title="Card title"
        />
      </div>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Heading level={3}>Interactive hovered</Heading>
      <div style={{ width: 500 }}>
        <Card
          actions={
            <Flex gap={8} justifyContent="flex-end">
              <Button onClick={() => {}}>First</Button>
              <Button onClick={() => {}} variant="text">
                Second
              </Button>
            </Flex>
          }
          content={
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis architecto dignissimos. Sequi ut,
              blanditiis amet, cum deserunt, nihil saepe doloremque error nobis id itaque dicta culpa alias vel sint!
            </Paragraph>
          }
          media={{
            position: "left",
            source: (
              <img
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                alt="placeholder"
                width={200}
              />
            ),
          }}
          onClick={() => {}}
          title="Card title"
        />
      </div>
    </ExampleContainer>
  </>
);
