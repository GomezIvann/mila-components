"use client";

import Code from "@/common/custom-components/code/code";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Flex, Heading, Paragraph } from "@gomezivann/mila-components";

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
        <Code language="css">{`font-family: 'Inter', sans-serif;`}</Code>
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
    title: "Accessibility and readability",
    content: (
      <Paragraph>
        The typography system in Mila is designed to ensure accessibility and readability for all users. We ensure that
        the minimum font size is 16px (1rem) across all text, providing clear and legible content on both large and
        small screens. Additionally, we aim to maintain a high contrast ratio between text and background colors,
        following WCAG guidelines to make the text accessible for users with visual impairments.
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
