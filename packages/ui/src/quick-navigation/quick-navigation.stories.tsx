import styled from "styled-components";
import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import QuickNavigation from "./quick-navigation";
import ExampleContainer from "../../.storybook/utils/example-container";

export default {
  title: "Quick navigation",
  component: QuickNavigation,
};

const defaultLinks = [
  {
    label: "Introduction",
  },
  {
    label: "Foundations",
    links: [{ label: "Color" }, { label: "Spacing" }, { label: "Typography" }],
  },
  {
    label: "Components",
    links: [
      {
        label: "Button",
      },
    ],
  },
];

const links = [
  {
    label: "Introduction",
    links: [
      {
        label: "Getting started",
      },
    ],
  },
  {
    label: "Components",
    links: [
      {
        label: "Definition",
      },
      {
        label: "Button",
      },
    ],
  },
  {
    label: "Foundations very very very very long long",
    links: [{ label: "Color very very long" }, { label: "Spaceveryveryveryverylong" }],
  },
  {
    label: "Components verylongtexttotestslugify",
    links: [
      {
        label: "Button",
      },
    ],
  },
];

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Default</Heading>
      <QuickNavContainer>
        <QuickNavigation links={defaultLinks} />
      </QuickNavContainer>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Heading level={3}>Hover</Heading>
      <QuickNavContainer>
        <QuickNavigation links={defaultLinks} />
      </QuickNavContainer>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Heading level={3}>Focus</Heading>
      <QuickNavContainer>
        <QuickNavigation links={defaultLinks} />
      </QuickNavContainer>
    </ExampleContainer>
  </>
);

export const Navigation = () => (
  <Page>
    <PageContent>
      <div id="introduction">
        <Heading level={1}>Introducion</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id eget
          nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
          dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam efficitur
          semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit, elementum metus
          eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo. Curabitur blandit
          iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum, et varius massa
          condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis lacinia nisl.
          Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
        </Paragraph>
        <div id="introduction-getting-started">
          <Heading level={2}>Getting started</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id
            eget nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
            dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam
            efficitur semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit,
            elementum metus eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo.
            Curabitur blandit iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum,
            et varius massa condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis
            lacinia nisl. Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
          </Paragraph>
        </div>
      </div>
      <div id="components">
        <Heading level={1}>Components</Heading>
        <div id="components-definition">
          <Heading level={2}>Definition</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id
            eget nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
            dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam
            efficitur semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit,
            elementum metus eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo.
            Curabitur blandit iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum,
            et varius massa condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis
            lacinia nisl. Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
          </Paragraph>
        </div>
        <div id="components-button">
          <Heading level={2}>Button</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id
            eget nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
            dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam
            efficitur semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit,
            elementum metus eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo.
            Curabitur blandit iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum,
            et varius massa condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis
            lacinia nisl. Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
          </Paragraph>
        </div>
      </div>
      <div id="foundations-very-very-very-very-long-long">
        <Heading level={1}>Foundations</Heading>
        <div id="foundations-very-very-very-very-long-long-color-very-very-long">
          <Heading level={2}>Color</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id
            eget nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
            dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam
            efficitur semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit,
            elementum metus eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo.
            Curabitur blandit iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum,
            et varius massa condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis
            lacinia nisl. Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
          </Paragraph>
        </div>
        <div id="foundations-very-very-very-very-long-long-spaceveryveryveryverylong">
          <Heading level={2}>Space</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id
            eget nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
            dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam
            efficitur semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit,
            elementum metus eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo.
            Curabitur blandit iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum,
            et varius massa condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis
            lacinia nisl. Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
          </Paragraph>
        </div>
      </div>
      <div id="components-verylongtexttotestslugify">
        <Heading level={1}>Components</Heading>
        <div id="components-verylongtexttotestslugify-button">
          <Heading level={2}>Button</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id
            eget nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
            dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam
            efficitur semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit,
            elementum metus eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo.
            Curabitur blandit iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum,
            et varius massa condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis
            lacinia nisl. Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
          </Paragraph>
        </div>
      </div>
    </PageContent>
    <QuickNavContainer>
      <QuickNavigation title="Page Content" links={links} />
    </QuickNavContainer>
  </Page>
);

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const PageContent = styled.div`
  margin: 0 auto;
  padding: 60px;
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const QuickNavContainer = styled.div`
  position: sticky;
  top: 100px;
  width: 300px;
  max-height: calc(100vh - 100px);
`;
