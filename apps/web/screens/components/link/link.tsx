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
          Use the mila link component in combination with other library links to take advantage of their navigation
          capabilities. For example, the{" "}
          <Link
            href="https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-functional-component"
            newWindow
          >
            Next.js link component
          </Link>
          .
        </li>
        <li>Use links to navigate users to a different page or to a different section of the same page.</li>
        <li>
          Use the <Code>icon</Code> prop to display an icon next to the link text. The <Code>icon</Code> prop can be
          either a string, for URLs, or a SVG element.
        </li>
        <li>
          Only SVG icons are styled by the component. If you want to use a different type of icon, you need to style it
          manually.
        </li>
        <li>
          Always include the <Code>href</Code> prop when using the link component. Although it is not mandatory to make
          it compatible with other library links, you need to warranty that it is provided to the component to avoid
          accessibility issues.
        </li>
        <li>
          Use the <Code>onClick</Code> event prop to add custom behavior when the link is clicked. This prop is useful
          when you need to perform additional actions before navigating to the URL, as well as use Navigational rooters
          or hooks from external libraries.
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
            <td>Text to be displayed as a link.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Whether the link is disabled.</td>
            <td>
              <Code table>false</Code>
            </td>
          </tr>
          <tr>
            <td>href</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>URL to navigate to when the link is clicked.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <Code table>{`string | (React.ReactNode & React.SVGProps<SVGSVGElement>)`}</Code>
            </td>
            <td>The icon to display in the left-side of the link.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>newWindow</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Whether to open the link in a new window.</td>
            <td>
              <Code table>false</Code>
            </td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <Code table>{"(e: React.MouseEvent<HTMLAnchorElement>) => void"}</Code>
            </td>
            <td>Function to be called when the link is clicked.</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "ARIA Authoring Practices Guide (APG)",
        content: (
          <BulletedList>
            <li>
              <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/link/" newWindow>
                Link pattern
              </Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function LinkPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Link</Heading>
        <Paragraph>
          The link component is an interactive element that references a resource, which can be internal (e.g., a
          section of the same page) or external (e.g., another web page).
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
