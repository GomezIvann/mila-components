"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
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
          Use <strong>CSS Flexbox</strong> when you need to design flexible, one-dimensional layouts that adjust to
          different screen sizes or content changes
        </li>
        <li>Use flex component to center elements both horizontally and vertically.</li>
        <li>
          Use flex component to create single-direction layouts (row or column) where you want elements to align or
          space themselves dynamically.
        </li>
        <li>Use flex component for dynamic resizing of elements based on content or screen size.</li>
        <li>Use flex component to create equal distribution of space between elements without extra calculations.</li>
        <li>Use flex component to have more flexibility when reordering elements visually.</li>
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
            <td>alignContent</td>
            <td>
              <Code table>
                "center" | "end" | "flex-start" | "flex-end" | "normal" | "space-around" | "space-between" |
                "space-evenly" | "start" | "stretch"
              </Code>
            </td>
            <td>
              Aligns the flex container's lines within the flex container when there is extra space in the cross-axis.
            </td>
            <td>
              <Code table>"normal"</Code>
            </td>
          </tr>
          <tr>
            <td>alignItems</td>
            <td>
              <Code table>
                "baseline" | "center" | "end" | "flex-start" | "flex-end" | "normal" | "self-end" | "self-start" |
                "start" | "stretch"
              </Code>
            </td>
            <td>Aligns the flex container's items when the items do not use all available space on the cross-axis.</td>
            <td>
              <Code table>"normal"</Code>
            </td>
          </tr>
          <tr>
            <td>alignSelf</td>
            <td>
              <Code table>"auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch"</Code>
            </td>
            <td>Aligns the flex item along the cross axis.</td>
            <td>
              <Code table>"auto"</Code>
            </td>
          </tr>
          <tr>
            <td>basis</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Specifies the initial main size of the flex item.</td>
            <td>
              <Code table>"auto"</Code>
            </td>
          </tr>
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
            <td>The content to be displayed inside the flex container.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>direction</td>
            <td>
              <Code table>"column" | "column-reverse" | "row" | "row-reverse"</Code>
            </td>
            <td>Defines the direction of the flex container.</td>
            <td>
              <Code table>"row"</Code>
            </td>
          </tr>
          <tr>
            <td>gap</td>
            <td>
              <Code table>
                {`{ columnGap?: Spaces; rowGap: Spaces } | { columnGap: Spaces; rowGap?: Spaces } | Spaces`}
              </Code>
              <br />
              being <Code table>Spaces</Code> one of the{" "}
              <NextLink href="/foundations/spacing" passHref legacyBehavior>
                <Link>Spacing core tokens</Link>
              </NextLink>
              .
            </td>
            <td>Defines the gap between the flex container's items.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>grow</td>
            <td>
              <Code table>number</Code>
            </td>
            <td>Defines the ability for a flex item to grow if necessary.</td>
            <td>
              <Code table>0</Code>
            </td>
          </tr>
          <tr>
            <td>inline</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Defines if the flex container should be displayed as an inline-flex container.</td>
            <td>
              <Code table>false</Code>
            </td>
          </tr>
          <tr>
            <td>justifyContent</td>
            <td>
              <Code table>
                "center" | "end" | "flex-end" | "flex-start" | "left" | "normal" | "right" | "space-around" |
                "space-between" | "space-evenly" | "start"
              </Code>
            </td>
            <td>Aligns the flex container's items when the items do not use all available space on the main-axis.</td>
            <td>
              <Code table>"normal"</Code>
            </td>
          </tr>
          <tr>
            <td>order</td>
            <td>
              <Code table>number</Code>
            </td>
            <td>Defines the order of the flex item.</td>
            <td>
              <Code table>0</Code>
            </td>
          </tr>
          <tr>
            <td>shrink</td>
            <td>
              <Code table>number</Code>
            </td>
            <td>Defines the ability for a flex item to shrink if necessary.</td>
            <td>
              <Code table>1</Code>
            </td>
          </tr>
          <tr>
            <td>wrap</td>
            <td>
              <Code table>"nowrap" | "wrap" | "wrap-reverse"</Code>
            </td>
            <td>Defines if the flex container should wrap its items.</td>
            <td>
              <Code table>"nowrap"</Code>
            </td>
          </tr>
        </tbody>
      </Table>
    ),
  },
  {
    title: "Fundamentals",
    content: (
      <BulletedList>
        <li>
          <Link href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" newWindow>
            Flexbox on MDN
          </Link>
        </li>
        <li>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
            newWindow
          >
            Learn more about flexbox on MDN
          </Link>
        </li>
      </BulletedList>
    ),
  },
];

export default function FlexPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Flex</Heading>
        <Paragraph>
          The flex component is a container used to create a flexible layout based on the CSS flexbox layout pattern.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
