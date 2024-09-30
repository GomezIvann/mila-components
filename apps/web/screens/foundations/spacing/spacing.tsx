"use client";

import { Code, CodeBlock } from "@/common/custom-components/code/code";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { BulletedList, Flex, Heading, Paragraph } from "@gomezivann/mila-components";

const codeExample = `import { space } from "@gomezivann/mila-components";
const styles = {
  margin: space[16],
  padding: space[24],
};

const App = () => (
  <div style={styles}>
    <h1>Hello, world!</h1>
  </div>
);`;

const sections = [
  {
    title: "Introduction",
    content: (
      <Paragraph>
        To ensure consistent alignment across elements, we use a spacing scale based on <Code>8px</Code> and{" "}
        <Code>4px</Code> units. These values are easily multiplied, offering flexible and consistent spacing steps that
        are distinct enough to accommodate a variety of layouts.
      </Paragraph>
    ),
  },
  {
    title: "Margins and padding",
    content: (
      <>
        <Paragraph>
          <strong>Margins</strong> and <strong>padding</strong> are key to separating elements and creating visual
          breathing room. They manage the negative space between UI components, enhancing clarity and structure.
        </Paragraph>
        <BulletedList>
          <li>
            <strong>Margin:</strong> The space outside an element. It creates a gap between the element and other
            surrounding elements, ensuring that components aren't too crowded.
          </li>
          <li>
            <strong>Padding:</strong> The space inside an element. It creates a buffer between the element's content
            (like text or images) and its borders, providing more clarity and breathing room for the content.
          </li>
        </BulletedList>
        <Paragraph>
          To establish a clear visual hierarchy, apply different spacing values according to the relative importance of
          elements.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Usage",
    content: (
      <>
      <Paragraph>
        Each spacing value in the proposed scale is associated with a core token that can be used to maintain consistency
        across components and layouts. These tokens are named based on the <Code>space</Code> prefix followed by the
        value in <Code>px</Code> units.
      </Paragraph>
      <CodeBlock language="tsx">{codeExample}</CodeBlock>
      </>
    ),
    subSections: [
      {
        title: "Small values",
        content: (
          <Paragraph>
            Use tokens from <Code>space-0</Code> to <Code>space-8</Code> for small and compact UI elements.
          </Paragraph>
        ),
        subSections: [
          {
            title: "Examples",
            content: (
              <BulletedList>
                <li>Gap between small icons and text.</li>
                <li>Padding for small component containers (e.g., badges, icon buttons, table cells).</li>
                <li>Gaps between repeating elements (e.g., button groups).</li>
                <li>Padding within input components.</li>
                <li>
                  Vertical spacing between elements in a card (e.g., between a title and description, or between
                  description and actions).
                </li>
                <li>
                  Gap between the trigger and its elevated element (e.g., between a dropdown button and its menu).
                </li>
              </BulletedList>
            ),
          },
        ],
      },
      {
        title: "Medium values",
        content: (
          <Paragraph>
            Use tokens from <Code>space-12</Code> to <Code>space-24</Code> for larger, less dense UI elements.
          </Paragraph>
        ),
        subSections: [
          {
            title: "Examples",
            content: (
              <BulletedList>
                <li>Gap between buttons and form fields.</li>
                <li>Padding for medium-sized components (e.g., cards, modals).</li>
                <li>Space between avatars/large icons and related content (e.g., section messages).</li>
                <li>Vertical spacing within cards.</li>
                <li>Spacing between elements in larger or less densely packed components.</li>
              </BulletedList>
            ),
          },
        ],
      },
      {
        title: "Large values",
        content: (
          <Paragraph>
            Use tokens from <Code>space-32</Code> to <Code>space-160</Code> for significant gaps between UI elements.
          </Paragraph>
        ),
        subSections: [
          {
            title: "Examples",
            content: (
              <BulletedList>
                <li>Space between content on a page (e.g., spacing between the top of the page and the header).</li>
                <li>Padding for large components (e.g., dialogs).</li>
                <li>Alignment within larger content sections (e.g., content alignment within a flag or banner).</li>
                <li>Full-page padding to separate and focus users’ attention on content.</li>
              </BulletedList>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Benefits",
    content: (
      <>
        <Paragraph>
          Proper spacing brings multiple benefits to both the user experience and the development process:
        </Paragraph>
        <BulletedList>
          <li>
            <strong>Enhanced User Experience and Readability:</strong> Proper spacing makes content easier to read and
            interact with, reducing eye strain and improving user engagement.
          </li>
          <li>
            <strong>Consistency:</strong> A standardized spacing system ensures visual cohesion across different
            elements and screens.
          </li>
          <li>
            <strong>Visual Hierarchy:</strong> Spacing helps establish a clear hierarchy by guiding users' attention to
            key elements.
          </li>
          <li>
            <strong>Increased Engagement:</strong> Clean, well-spaced designs are more inviting, leading to increased
            interaction and user satisfaction.
          </li>
          <li>
            <strong>Reduced Clutter:</strong> Proper spacing prevents elements from feeling crowded, making the design
            more professional and focused.
          </li>
          <li>
            <strong>Efficiency:</strong> Once established, a consistent spacing system saves time by streamlining future
            projects.
          </li>
          <li>
            <strong>Improved Developer Collaboration:</strong> Clear spacing guidelines make implementation smoother and
            reduce potential miscommunication during development.
          </li>
        </BulletedList>
      </>
    ),
  },
];

export default function SpacingPage() {
  return (
    <Flex direction="column" gap={64}>
      <Heading level={1}>Spacing</Heading>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
