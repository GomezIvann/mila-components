"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
import NextLink from "next/link";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";

const sections = [
  {
    title: "Usage",
    content: (
      <BulletedList>
        <li>Use this component to create a consistent layout across your application.</li>
        <li>
          The application layout component is composed of a header, a side navigation, and a footer. You can customize
          each of these sections by passing the appropriate children.
        </li>
        <li>
          We encourage you to use this component in conjunction with our{" "}
          <NextLink href="/components/header" passHref legacyBehavior>
            <Link>Header</Link>
          </NextLink>
          ,{" "}
          <NextLink href="/components/side-navigation" passHref legacyBehavior>
            <Link>Side navigation</Link>
          </NextLink>
          , or{" "}
          <NextLink href="/components/footer" passHref legacyBehavior>
            <Link>Footer</Link>
          </NextLink>{" "}
          components.
        </li>
      </BulletedList>
    ),
  },
  // {
  //   title: "Example",
  //   content: <LiveCodeBlock example={defaultExample} />,
  // },
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
            <td>The content to be displayed in the main section of the application layout.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>
              <Code table>React.ReactNode</Code>
            </td>
            <td>The content to be displayed in the footer section of the application layout.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>header</td>
            <td>
              <Code table>React.ReactNode</Code>
            </td>
            <td>The content to be displayed in the header section of the application layout.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>sideNavigation</td>
            <td>
              <Code table>React.ReactNode</Code>
            </td>
            <td>The content to be displayed in the side navigation menu of the application layout.</td>
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
              <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" newWindow>
                Landmarks pattern
              </Link>
            </li>
          </BulletedList>
        ),
      },
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

export default function ApplicationLayoutPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Application layout</Heading>
        <Paragraph>
          The application layout component represents the layout structure of your UI. It is composed of a header, a
          side navigation menu, and a footer section.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
