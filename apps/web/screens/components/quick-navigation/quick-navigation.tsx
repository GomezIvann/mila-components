"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Paragraph, Table } from "mila-components";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/live-code-block/live-code-block";
import defaultExample from "./code-examples/default";

const linksType = `{
  label: string;
  links?: 
    { label: string }[];
}[]`;

const sections = [
  {
    title: "Usage",
    content: (
      <BulletedList>
        <li>
          Use the quick navigation to give users a quick look at the content of a page.
        </li>
        <li>
          Use the <Code>title</Code> prop to make users understand what the quick navigation is about. It must be a short and descriptive text.
        </li>
        <li>
          The quick navigation is particularly useful for long pages with multiple sections, like documentation pages.
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
                links
              </Flex>
            </td>
            <td>
              <Code table>{linksType}</Code>
            </td>
            <td>Text to be displayed as a paragraph.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Title of the quick navigation links.</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
    ),
  },
];

export default function QuickNavigationPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Quick navigation</Heading>
        <Paragraph>
          The quick navigation component is used to provide a list of links to different sections of a page, allowing
          users to quickly jump to the content they are interested in.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
