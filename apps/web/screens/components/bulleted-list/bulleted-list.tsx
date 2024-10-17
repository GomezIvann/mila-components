"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
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
          Use the <Code>children</Code> prop to pass the bullet points. The structure of the children should be a list
          of <Code>{"<li>"}</Code> elements.
        </li>
        <li>
          The values of the prop <Code>styleType</Code> are exactly the same as the CSS property{" "}
          <Code>{"list-style-type"}</Code>. Check the{" "}
          <Link href="https://developer.mozilla.org/es/docs/Web/CSS/list-style-type" newWindow>
            MDN web documentation
          </Link>{" "}
          for more information.
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
            <td>The content of the bulleted list.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>styleType</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>The style type of the bullet points.</td>
            <td>
              <Code table>"disc"</Code>
            </td>
          </tr>
        </tbody>
      </Table>
    ),
  },
];

export default function BulletedListPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Bulleted list</Heading>
        <Paragraph>The bulleted list component is a simple list of items with bullet points.</Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
