"use client";

import { BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/live-code-block/live-code-block";
import defaultExample from "./code-examples/default";
import NextLink from "next/link";

const sections = [
  {
    title: "Usage",
    content: (
      <BulletedList>
        <li>
          Use the header component in combination with the{" "}
          <NextLink href="/components/application-layout" passHref legacyBehavior>
            <Link>Application layout</Link>
          </NextLink>{" "}
          and the rest of the layout components to create consistent layouts across your application.
        </li>
        <li>
          Use the <Code>content</Code> prop to pass custom content to be rendered inside the header. This can be used to
          add additional information or links. Take into account that the header should not be too big, so keep the
          content concise.
        </li>
        <li>
          Use <Code>onNavigate</Code> prop to handle consistently the navigation of all the links in the header,
          including the title, if it is a link.
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
          Use the <Code>responsiveBreakpoint</Code> to set the breakpoint at which the header will switch to a
          responsive mode. When the viewport is smaller than the breakpoint, the header will collapse its links into a
          dropdown menu.
        </li>
        <li>
          If an <Code>href</Code> is provided, the title will be rendered as a link. Use this functionality to link to
          the landing page of your application.
        </li>
        <li>
          The prop <Code>icon</Code> of both the title and groups or links can be either a string, for
          URLs, or a SVG element. Only SVG icons are styled by the component. If you want to use a different type of
          icon, you need to style it manually.
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
            <td>Custom content to be rendered inside the header.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>links</td>
            <td>
              <Code table>{"{ external?: boolean; href: string; label: string; selected?: boolean; }[]"}</Code>
            </td>
            <td>
              An array of objects containing the links to be rendered in the header. Each object should contain the
              following properties:
              <BulletedList>
                <li>
                  <Code>external</Code>: A boolean indicating whether the link is external. If set to <Code>true</Code>,
                  the link will open in a new tab and will not execute the <Code>onNavigate</Code> function.
                </li>
                <li>
                  <Code>href</Code>: The URL of the link.
                </li>
                <li>
                  <Code>label</Code>: The text to be displayed as a link.
                </li>
                <li>
                  <Code>selected</Code>: A boolean indicating whether the link is selected. If set to <Code>true</Code>,
                  the link will be styled as selected.
                </li>
              </BulletedList>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onNavigate</td>
            <td>
              <Code table>{"(href: string) => void"}</Code>
            </td>
            <td>Function that will be executed when a link is clicked.</td>
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
            <td>The breakpoint at which the header will switch to a responsive mode.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <Code table>
                {"{ href?: string; icon?: string | (React.ReactNode & React.SVGProps<SVGSVGElement>); text?: string; }"}
              </Code>
            </td>
            <td>Title of the header.</td>
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
              <Link href="https://www.w3.org/WAI/tutorials/page-structure/regions/#page-header" newWindow>
                Page regions: Header
              </Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function HeaderPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Header</Heading>
        <Paragraph>
          The header component is used to provide a consistent layout for the top section of a page, typically
          containing the main navigation, branding, and other important information.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
