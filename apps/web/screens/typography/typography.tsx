"use client";

import { CodeBlock, Code } from "@/common/custom-components/code/code";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { BulletedList, Flex, Heading, Paragraph, Table } from "@gomezivann/mila-components";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <Paragraph>
          In the Mila component library, typography plays a key role in ensuring clarity, accessibility, and visual
          harmony. The typography system is built around the font Inter, chosen for its modern design, excellent
          legibility, and flexibility across different contexts and screen sizes. This section outlines the principles
          for typography usage, including hierarchy, sizing, and accessibility considerations.
        </Paragraph>
        <Paragraph>
          The typography system in Mila is designed to balance legibility, accessibility, and aesthetic appeal. With
          Inter as the core font, the typography maintains a clean, modern look while providing clear visual hierarchy
          and ease of use. By adhering to these principles, we ensure that all text elements in the design system are
          easy to read, navigate, and scale across different platforms and devices.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Font family",
    content: (
      <>
        <Paragraph>
          Our chosen font family is Inter, a modern sans-serif typeface designed for optimal readability on screens. It
          offers a clean, simple, and versatile aesthetic that complements both functional and visual components of the
          library.
        </Paragraph>
        <CodeBlock language="CSS">{`font-family: 'Inter', sans-serif;`}</CodeBlock>
        <Paragraph>
          Inter is available in multiple weights and styles, allowing for flexible and dynamic typography designs. The
          font's design features open apertures, large x-height, and consistent letterforms, making it highly readable
          even at small sizes or low resolutions.
        </Paragraph>
        <Paragraph>
          This typeface is used across all headings, body text, and UI elements, ensuring a cohesive and professional
          appearance throughout the entire design system.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Typographic Hierarchy",
    content: (
      <>
        <Paragraph>
          A well-defined typographic hierarchy guides users through content in a logical and intuitive way. By using
          different font sizes, weights, and spacings, we create a clear structure that emphasizes important information
          while maintaining readability.
        </Paragraph>
        <Paragraph>
          <strong>Heading 1 (h1):</strong> Used for main titles and key sections.
        </Paragraph>
        <BulletedList>
          <li>Font size: 2.5rem</li>
          <li>Font weight: 700 (bold)</li>
          <li>Letter spacing: -0.025em</li>
          <li>Line height: 1.25em</li>
        </BulletedList>
        <Paragraph>
          <strong>Heading 2 (h2):</strong> Applied to section titles and important subheadings.
        </Paragraph>
        <BulletedList>
          <li>Font size: 1.5rem</li>
          <li>Font weight: 600 (semi-bold)</li>
          <li>Letter spacing: 0em</li>
          <li>Line height: 1.5em</li>
        </BulletedList>
        <Paragraph>
          <strong>Heading 3 (h3):</strong> Used for minor headings or sub-sections.
        </Paragraph>
        <BulletedList>
          <li>Font size: 1.25rem</li>
          <li>Font weight: 600 (semi-bold)</li>
          <li>Letter spacing: 0.025em</li>
          <li>Line height: 1.25em</li>
        </BulletedList>
        <Paragraph>
          <strong>Heading 4 (h4) and Heading 5 (h5):</strong> Used for additional subheadings or minor sections. Too
          many heading levels can make the content harder to read, so use these sparingly.
        </Paragraph>
        <BulletedList>
          <li>Font size: 1rem (h4), 0.875rem (h5)</li>
          <li>Font weight: 600 (semi-bold)</li>
          <li>Letter spacing: 0em (h4), 0.025em (h5)</li>
          <li>Line height: 1.5em (h4), 1.25em (h5)</li>
        </BulletedList>
        <Paragraph>
          <strong>Body text:</strong> Used for paragraphs, descriptions, and supporting content.
        </Paragraph>
        <BulletedList>
          <li>Font size: 1rem</li>
          <li>Font weight: 400 (regular)</li>
          <li>Letter spacing: 0em</li>
          <li>Line height: 1.5em</li>
        </BulletedList>
        <Paragraph>
          Each of these levels contributes to a clear and consistent user experience, making it easy for users to
          navigate the interface.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Modular Scale",
    content: (
      <>
        <Paragraph>
          To maintain a consistent typographic rhythm, we use a modular scale based on the root font-size of{" "}
          <Code>16px</Code> / <Code>1rem</Code>. This scale allows us to define font sizes proportionally, ensuring
          visual harmony across the design. The scale follows a 1.25x ratio for heading sizes:
        </Paragraph>
        <Table>
          <thead>
            <tr>
              <th>Heading level</th>
              <th>rem</th>
              <th>px</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>h1</td>
              <td>2.5</td>
              <td>40</td>
            </tr>
            <tr>
              <td>h2</td>
              <td>2</td>
              <td>32</td>
            </tr>
            <tr>
              <td>h3</td>
              <td>1.5</td>
              <td>24</td>
            </tr>
            <tr>
              <td>h4</td>
              <td>1</td>
              <td>16</td>
            </tr>
            <tr>
              <td>h5</td>
              <td>0.875</td>
              <td>14</td>
            </tr>
            <tr>
              <td>Body text</td>
              <td>1</td>
              <td>16</td>
            </tr>
          </tbody>
        </Table>
        <Paragraph>
          This scale ensures that typography grows proportionally across different levels of the hierarchy, maintaining
          both clarity and visual consistency.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Font Weights",
    content: (
      <>
        <Paragraph>
          To create contrast and establish hierarchy, we leverage different font weights from the Inter family. The use
          of bold or semi-bold text helps emphasize important information, while regular weight ensures optimal
          readability for longer text blocks.
        </Paragraph>
        <BulletedList>
          <li>
            <strong>400 (Regular):</strong> Used for body text, paragraphs, and supporting information.
          </li>
          <li>
            <strong>600 (Semi-bold):</strong> Applied to sub-headings or emphasized content.
          </li>
          <li>
            <strong>700 (Bold):</strong> Reserved for main headings or prominent elements that need to stand out.
          </li>
        </BulletedList>
      </>
    ),
  },
  {
    title: "Line height and spacing",
    content: (
      <>
        <Paragraph>
          The appropriate use of <strong>line-height</strong> and <strong>letter-spacing</strong> enhances the
          readability of text across various screen sizes. For body text, we use a line-height of <Code>1.5em</Code>,
          which provides enough breathing room between lines to improve legibility. For headings, a slightly tighter
          line-height of <Code>1.25em</Code> ensures a clean and compact presentation while still maintaining clarity.
        </Paragraph>
        <BulletedList>
          <li>
            <strong>Body text line-height:</strong> 1.5em
          </li>
          <li>
            <strong>Heading line-height:</strong> 1.25 to 1.4, depending on size
          </li>
        </BulletedList>
      </>
    ),
  },
  {
    title: "Accessibility and readability",
    content: (
      <Paragraph>
        The typography system in Mila is designed to ensure accessibility and readability for all users. We ensure that
        the minimum font size is <Code>16px</Code> / <Code>1rem</Code> across all text, providing clear and legible
        content on both large and small screens. Additionally, we aim to maintain a high contrast ratio between text and
        background colors, following WCAG guidelines to make the text accessible for users with visual impairments.
      </Paragraph>
    ),
  },
];

export default function TypographyPage() {
  return (
    <Flex direction="column" gap={64}>
      <Heading level={1}>Typography</Heading>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
