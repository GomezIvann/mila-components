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
        <li>
          Use tables for representing <strong>tabular data</strong>, such as financial reports, schedules, and other structured data.
        </li>
        <li>
          Use properly structured tables with <Code table>thead</Code>, <Code table>tbody</Code>, and{" "}
          <Code table>tr</Code> elements.
        </li>
        <li>
          For creating an appropriate structure, follow the{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#visual_layout_of_table_contents"
            newWindow
          >
            MDN web documentation
          </Link>{" "}
          for creating tables.
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
            <td>Content of the table.</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
    ),
  },
];

export default function TablePage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Table</Heading>
        <Paragraph>The table component is used to display tabular data in a structured format.</Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
