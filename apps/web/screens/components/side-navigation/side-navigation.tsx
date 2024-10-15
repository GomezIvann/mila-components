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
          Use the side navigation component in combination with the{" "}
          <NextLink href="/components/application-layout" passHref legacyBehavior>
            <Link>Application layout</Link>
          </NextLink>{" "}
          and the rest of the layout components to create consistent layouts across your application.
        </li>
        <li>Use sections to group links or link groups that share a common domain or context.</li>
        <li>Use groups to visually organize and collapse links, improving the distribution of information.</li>
        <li>
          Use <Code>onNavigate</Code> prop to handle consistently the navigation of all the links in the side navigation.
        </li>
        <li>
          If a link is marked as <Code>external</Code>, it will include an especial icon (
          <span style={{ verticalAlign: "middle" }}>
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z" />
              </svg>
            }
          </span>
          ). It also implies that its navigation will be absolute and will not execute the <Code>onNavigate</Code>{" "}
          function.
        </li>
        <li>
          Use the <Code>responsiveBreakpoint</Code> to set the breakpoint at which the side navigation will switch to a
          responsive mode. When the viewport is smaller than the breakpoint, the side navigation will close and an
          action button will appear in an absolute position from the relative position of its parent container. This
          button will act as a trigger, changing the visibility of the side navigation menu when clicked.
        </li>
        <li>
          The <Code>icon</Code> of the title can be either a string, for URLs, or a SVG element. Only SVG icons are
          styled by the component. If you want to use a different type of icon, you need to style it manually.
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
            <td>items</td>
            <td>
              <Code table>{"(SingleItemType | GroupItemType)[] | SectionType[]"}</Code>
              <dl>
                <dt>
                  <Code table>SingleItemType</Code>
                </dt>
                <dd>
                  An object type with the following attributes:{" "}
                  <Code table>
                    {`external?: boolean; href: string; icon?: IconProp; label: string; selected?: boolean;`}
                  </Code>
                </dd>
                <dt>
                  <Code table>GroupItemType</Code>
                </dt>
                <dd>
                  An object type with the following attributes:{" "}
                  <Code table>{"icon?: IconProp; items: SingleItemType[]; label: string;"}</Code>
                </dd>
                <dt>
                  <Code table>SectionType</Code>
                </dt>
                <dd>
                  An object type with the following attributes:{" "}
                  <Code table>{"items: (SingleItemType | GroupItemType)[]; title?: string"}</Code>
                </dd>
                <dt>
                  <Code table>IconProps</Code>
                </dt>
                <dd>
                  An object type with the following attributes:{" "}
                  <Code table>{"string | (React.ReactNode & React.SVGProps<SVGSVGElement>)"}</Code>
                </dd>
              </dl>
            </td>
            <td>
              Array of objects representing each possible element stored inside the side navigation. It can be either an
              array of sections or of single/grouped items.
            </td>
            <td>-</td>
          </tr>

          <tr>
            <td>onNavigate</td>
            <td>
              <Code table>{"(href: string) => void"}</Code>
            </td>
            <td>Function that will be executed when an item is clicked.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>responsiveBreakpoint</td>
            <td>
              <dl>
                <dt>
                  <Code table>"xs" | "sm" | "md" | "lg" | "xl" | "xxl"</Code>
                </dt>
                <dd>
                  This values correspond to the breakpoints defined in the{" "}
                  <NextLink href="/foundations/layout" passHref legacyBehavior>
                    <Link>layout foundations</Link>
                  </NextLink>
                  .
                </dd>
              </dl>
            </td>
            <td>The breakpoint at which the side navigation will switch to a responsive mode.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <Code table>
                {"{ icon?: string | (React.ReactNode & React.SVGProps<SVGSVGElement>); text?: string; }"}
              </Code>
            </td>
            <td>Title of the side navigation.</td>
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
              <Link href="https://www.w3.org/WAI/tutorials/page-structure/regions/#navigation" newWindow>
                Page regions: Navigation
              </Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function SideNavigationPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Side navigation</Heading>
        <Paragraph>
          The side navigation component provides a vertical menu typically placed on the left or right side of the
          screen. It helps users navigate between different sections or pages of an application. The component can
          include sections, expandable groups, icons, and links, making it ideal for organizing complex structures in a
          user-friendly way.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
