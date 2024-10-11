"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/code/live-code-block";
import defaultExample from "./code-examples/default";

const sections = [
  {
    title: "Usage",
    content: (
      <BulletedList>
        <li>Use headings to give users an overview of the content and to help them navigate through the page.</li>
        <li>
          Use headings to give users a quick understanding of the content and to help them find the information they are
          looking for.
        </li>
        <li>
          Use headings in a hierarchical order, starting with the most important heading (h1) and ending with the least
          important heading (h5).
        </li>
      </BulletedList>
    ),
  },
  {
    title: "Example",
    content: <LiveCodeBlock example={defaultExample} />,
  },
  {
    title: "API",
    content: (
      <Table>
        <thead>
          <tr>
            <th>Prop name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Flex direction="column" gap={2}>
                <Badge color="yellow" title="This prop is mandatory.">
                  Required
                </Badge>
                children
              </Flex>
            </td>
            <td>
              <Code table>React.ReactNode</Code>
            </td>
            <td>Text to be displayed as a heading.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>level</td>
            <td>
              <Code table>1 | 2 | 3 | 4 | 5</Code>
            </td>
            <td>Hierarchical level of the heading.</td>
            <td>
              <Code table>1</Code>
            </td>
          </tr>
          <tr>
            <td>weight</td>
            <td>
              <Code table>"heavy" | "light"</Code>
            </td>
            <td>Font weight of the heading.</td>
            <td>
              <Code table>"heavy"</Code>
            </td>
          </tr>
        </tbody>
      </Table>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WAI Tutorials",
        content: (
          <BulletedList>
            <li>
              <Link href="https://www.w3.org/WAI/tutorials/page-structure/headings/" newWindow>
                Headings
              </Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function HeadingPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Heading</Heading>
        <Paragraph>
          Headings are used to define the structure of a page, breaking it into sections and subsections.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
