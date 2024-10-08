import ExampleContainer from "../../.storybook/utils/example-container";
import Heading from "../heading/heading";
import Paragraph from "./paragraph";

export default {
  title: "Paragraph",
  component: Paragraph,
};

export const Stories = () => (
  <ExampleContainer>
    <Heading level={3}>Example paragraph</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id eget
      nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu dignissim,
      fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam efficitur semper
      pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit, elementum metus eu, ornare
      risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo. Curabitur blandit iaculis pretium.
      Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum, et varius massa condimentum eget.
      Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis lacinia nisl. Suspendisse sed quam
      tincidunt, commodo dolor vel, tincidunt nisl.
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id eget
      nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu dignissim,
      fringilla turpis.
    </Paragraph>
  </ExampleContainer>
);
