"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
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
          Use the dropdown menu component to group related actions under a single button. This actions can be
          navigational or functional. The dropdown menu is used to save space and reduce visual clutter.
        </li>
        <li>
          Use the <Code>label</Code> prop to provide a clear and concise description of the dropdown menu. The label
          should describe the actions that the dropdown menu contains.
        </li>
        <li>
          The <Code>label</Code> of the items should be clear and concise. It should describe the action performed when
          the item is clicked.
        </li>
        <li>
          The <Code>value</Code> of the items should be unique and descriptive. It is used to identify the item when it
          is clicked.
        </li>
        <li>
          Use the <Code>icon</Code> prop to display an icon next to the action button label. The <Code>icon</Code> prop
          can be either a string, for URLs, or a SVG element.
        </li>
        <li>
          Only SVG icons are styled by the component. If you want to use a different type of icon, you need to style it
          manually.
        </li>
        <li>
          Use <Code>triggerVariant</Code> prop to change the appearance of the trigger button. It can be either our{" "}
          <NextLink href="/components/action-button" passHref legacyBehavior>
            <Link>Action button</Link>
          </NextLink>{" "}
          or the{" "}
          <NextLink href="/components/button" passHref legacyBehavior>
            <Link>Button</Link>
          </NextLink>.
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
            <td>hideChevron</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Whether to hide the chevron icon of the trigger button.</td>
            <td>
              <Code table>boolean</Code>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <Code table>{`string | (React.ReactNode & React.SVGProps<SVGSVGElement>)`}</Code>
            </td>
            <td>The icon of the trigger button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <Code table>"left" | "right"</Code>
            </td>
            <td>Position of the icon in relation to the label of the trigger button.</td>
            <td>
              <Code table>"right"</Code>
            </td>
          </tr>
          <tr>
            <td>
              <Flex direction="column" gap={2}>
                <Badge color="yellow" title="This prop is mandatory.">
                  Required
                </Badge>
                items
              </Flex>
            </td>
            <td>
              <Code table>{"{ label: string; value: string }[]"}</Code>
            </td>
            <td>The items to display in the dropdown's menu.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>The label of the trigger button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <Flex direction="column" gap={2}>
                <Badge color="yellow" title="This prop is mandatory.">
                  Required
                </Badge>
                onItemClick
              </Flex>
            </td>
            <td>
              <Code table>{"(value: string) => void"}</Code>
            </td>
            <td>Callback function when an item is clicked.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>triggerVariant</td>
            <td>
              <Code table>"primary" | "outlined" | "text" | "action"</Code>
            </td>
            <td>The type of the trigger button.</td>
            <td>
              <Code table>"primary"</Code>
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
        title: "ARIA Authoring Practices Guide (APG)",
        content: (
          <BulletedList>
            <li>
              <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/" newWindow>
                Menu button pattern
              </Link>
            </li>
            <li>
              <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/" newWindow>
                Menu and Menubar pattern
              </Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function DropdownMenuPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Dropdown menu</Heading>
        <Paragraph>
          The dropdown menu component is a button that opens a list of actions when clicked. It is used to group related
          actions under a single button.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
