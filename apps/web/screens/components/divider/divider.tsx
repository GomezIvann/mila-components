"use client";

import { BulletedList, Divider, Flex, Heading, Paragraph, Table } from "mila-components";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/live-code-block/live-code-block";
import defaultExample from "./code-examples/default";

const sections = [
  {
    title: "Usage",
    content: (
      <BulletedList>
        <li>
          Use dividers the content of the page into different groups or sections. This helps users to understand the
          content structure.
        </li>
        <li>
          A divider should be visible enough to separate the content but not too strong to distract the user from the
          content.
        </li>
        <li>
          Use the <Code>decorative</Code> prop to indicate whether the divider is purely decorative and should be
          ignored by screen readers. Internally, it gives the divider an <Code>aria-hidden</Code> attribute.
        </li>
        <li>
          Depending on the direction of the content you want to separate, use the <Code>orientation</Code> prop to set
          the orientation of the divider.
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
            <td>decorative</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Whether the divider is purely decorative and should be ignored by screen readers.</td>
            <td>
              <Code table>true</Code>
            </td>
          </tr>
          <tr>
            <td>lightness</td>
            <td>
              <Code table>"light" | "dark"</Code>
            </td>
            <td>The lightness of the divider.</td>
            <td>
              <Code table>"light"</Code>
            </td>
          </tr>
          <tr>
            <td>orientation</td>
            <td>
              <Code table>"horizontal" | "vertical"</Code>
            </td>
            <td>The orientation of the divider.</td>
            <td>
              <Code table>"horizontal"</Code>
            </td>
          </tr>
          <tr>
            <td>weight</td>
            <td>
              <Code table>"regular" | "strong"</Code>
            </td>
            <td>The weight of the divider.</td>
            <td>
              <Code table>"regular"</Code>
            </td>
          </tr>
        </tbody>
      </Table>
    ),
  },
];

export default function DividerPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Divider</Heading>
        <Paragraph>The divider component is used to separate content in a page.</Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
