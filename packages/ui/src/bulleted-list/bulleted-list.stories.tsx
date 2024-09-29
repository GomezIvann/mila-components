import BulletedList from "./bulleted-list";
import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";

export default {
  title: "Bulleted List",
  component: BulletedList,
};

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Icon list (SVG)</Heading>
      <Heading level={3}>Number list</Heading>
      <BulletedList styleType="number">
        <li>Code</li>
        <li>Usage</li>
        <li>Specifications</li>
      </BulletedList>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Square list</Heading>
      <BulletedList styleType="square">
        <li>Code</li>
        <li>Usage</li>
        <li>Specifications</li>
      </BulletedList>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Circle list</Heading>
      <BulletedList styleType="circle">
        <li>Code</li>
        <li>Usage</li>
        <li>Specifications</li>
      </BulletedList>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Disc list</Heading>
      <BulletedList>
        <li>Code</li>
        <li>Usage</li>
        <li>Specifications</li>
      </BulletedList>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Multiple lines</Heading>
      <div style={{ width: "400px" }}>
        <BulletedList styleType="number">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </li>
          <li>Text 2.</li>
        </BulletedList>
      </div>
    </ExampleContainer>
  </>
);
