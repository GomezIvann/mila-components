"use client";

import { BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/code/live-code-block";
import defaultExample from "./code-examples/default";
import NextLink from "next/link";

const sections = [
  {
    title: "Usage",
    content: (
      <BulletedList>
        <li>
          The footer is typically found at the end of a page or section and is used to present copyright and legal
          information or links to related content, as well as some branding.
        </li>
        <li>
          Use the footer component in combination with the{" "}
          <NextLink href="/components/application-layout" passHref legacyBehavior>
            <Link>Application layout</Link>
          </NextLink>{" "}
          and the rest of the layout components to create consistent layouts across your application.
        </li>
        <li>
          Use the <Code>content</Code> prop to pass custom content to be rendered inside the footer. This can be used to
          add additional information or links. Take into account that the footer should not be too big, so keep the
          content concise.
        </li>
        <li>
          Use the <Code>title</Code> prop to pass the main title of the footer. This can be a text or an icon.
        </li>
        <li>
          The <Code>icon</Code> prop can be either a string, for URLs, or a SVG element. Only SVG icons are styled by
          the component. If you want to use a different type of icon, you need to style it manually.
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
            <td>content</td>
            <td>
              <Code table>React.ReactNode</Code>
            </td>
            <td>Custom content to be rendered inside the footer.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>copyright</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>The text to be displayed as the copyright at the bottom of the footer.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>links</td>
            <td>
              <Code table>{"{ label: string; href: string; }[]"}</Code>
            </td>
            <td>The links to be displayed at the bottom footer.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>socialIcons</td>
            <td>
              <Code table>
                {"{ icon: string | (React.ReactNode & React.SVGProps<SVGSVGElement>); href: string; title: string; }[]"}
              </Code>
            </td>
            <td>The social icon links to be rendered at the top of the footer.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <Code table>
                {"{ icon?: string | (React.ReactNode & React.SVGProps<SVGSVGElement>); text?: string; }"}
              </Code>
            </td>
            <td>The main title of the footer.</td>
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
        title: "WAI Tutorials",
        content: (
          <BulletedList>
            <li>
              <Link href="https://www.w3.org/WAI/tutorials/page-structure/regions/" newWindow>
                Page regions
              </Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function FooterPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Footer</Heading>
        <Paragraph>
          The footer component is typically found at the end of a page or section and is used to present copyright and
          legal information or links to related content, as well as some branding.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
