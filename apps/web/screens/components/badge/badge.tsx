"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Paragraph, Table } from "mila-components";
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
          Use <Code>title</Code> prop to provide an accessible text to the badge. It is important to provide a
          meaningful value to both screen readers and search engines. It is displayed as a tooltip when hovering over
          the badge and, under the hood, it gives value to the
          <Code>aria-label</Code> attribute.
        </li>
        <li>
          Use the <Code>icon</Code> prop to display an icon next to the badge label. The <Code>icon</Code> prop can be
          either a string, for URLs, or a SVG element.
        </li>
        <li>
          Only SVG icons are styled by the component. If you want to use a different type of icon, you need to style it
          manually.
        </li>
        <li>
          Use the <Code>variant</Code> prop to change the appearance of the badge. The default value is{" "}
          <Code>default</Code>, but you can change it to <Code>outlined</Code> if needed.
        </li>
        <li>
          Use the different <Code>color</Code> options to give meaning to the badge. The default value is{" "}
          <Code>grey</Code>, which doesn't have an implicit semantic at all, but you can change it to{" "}
          <Code>yellow</Code>, <Code>blue</Code>, <Code>green</Code>, <Code>red</Code>, etc, to give meaning to the
          badge.
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
              <Code table>string</Code>
            </td>
            <td>The label text of the badge.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>color</td>
            <td>
              <Code table>"grey" | "purple" | "blue" | "green" | "red" | "yellow" | "orange"</Code>
            </td>
            <td>The color of the badge.</td>
            <td>
              <Code table>"grey"</Code>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <Code table>{`string | (React.ReactNode & React.SVGProps<SVGSVGElement>)`}</Code>
            </td>
            <td>The icon to display in the left-side of the badge.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>
              Accessible text of the badge. It gives value to both screen readers and search engines. It is displayed as
              a tooltip when hovering over the badge.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>
              <Code table>"default" | "outlined"</Code>
            </td>
            <td>The variant of the badge.</td>
            <td>
              <Code table>"default"</Code>
            </td>
          </tr>
        </tbody>
      </Table>
    ),
  },
];

export default function BadgePage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Badge</Heading>
        <Paragraph>
          The badge component is used to display a small amount of information in a visual way. It can be used to
          display a count, a status, or any other small piece of information.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
