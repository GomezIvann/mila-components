"use client";

import { Code, CodeBlock } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/code/live-code-block";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Flex, Heading, Link, Paragraph } from "mila-components";
import NextLink from "next/link";
import buildingExample from "./code-examples/building";

const sections = [
  {
    title: "How to install Mila",
    content: (
      <>
        <Paragraph>
          Mila components is published as an <Code>npm</Code> package. You can install them using your favorite package
          manager.
        </Paragraph>
      </>
    ),
    subSections: [
      {
        title: "First step: Install the package",
        content: (
          <>
            <Paragraph>Run the following command in your terminal:</Paragraph>
            <CodeBlock language="bash">{`npm install mila-components`}</CodeBlock>
          </>
        ),
      },
      {
        title: "Second step: Import the components",
        content: (
          <>
            <Paragraph>Import the components you want to use in your project:</Paragraph>
            <CodeBlock language="javascript">{`import { Button, Flex, Heading, Paragraph, Link } from "mila-components";`}</CodeBlock>
          </>
        ),
      },
      {
        title: "Third step: Start building",
        content: (
          <>
            <Paragraph>
              Now you can start building your project using Mila components. Here's a simple example to get you started:
            </Paragraph>
            <LiveCodeBlock defaultOpenEditor example={buildingExample} />
          </>
        ),
      },
    ],
  },
  {
    title: "What's next?",
    content: (
      <>
        <Paragraph>
          You can now start building your project using Mila components. Check the{" "}
          <NextLink href="/components" passHref legacyBehavior>
            <Link>components</Link>
          </NextLink>{" "}
          section to see all the components available.
        </Paragraph>
        <Paragraph>
          If you want to learn about Mila's design principles, check the{" "}
          <NextLink href="/foundations" passHref legacyBehavior>
            <Link>foundations</Link>
          </NextLink>{" "}
          section.
        </Paragraph>
      </>
    ),
  },
];

export default function InstallationPage() {
  return (
    <Flex direction="column" gap={64}>
      <Heading level={1}>Installation</Heading>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
