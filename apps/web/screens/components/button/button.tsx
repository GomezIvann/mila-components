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
          Use label texts that are clear and concise. The label should describe the action that the button performs when
          clicked.
        </li>
        <li>
          Use the pre-designed semantic types to give meaning to the button. Each of them has a different color and
          meaning depending on the context.
        </li>
        <li>Use the different variants to change the morphology of the button.</li>
        <li>
          Use the <Code>icon</Code> prop to display an icon next to the action button label. The <Code>icon</Code> prop
          can be either a string, for URLs, or a SVG element.
        </li>
        <li>
          Only SVG icons are styled by the component. If you want to use a different type of icon, you need to style it
          manually.
        </li>
        <li>
          Use <Code>type</Code> prop carefully. The default value is <Code>button</Code>, but you can change it to{" "}
          <Code>submit</Code> or <Code>reset</Code> if needed. To know more about the differences between these types,{" "}
          check the{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type" newWindow>
            MDN documentation
          </Link>
          .
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
            <td>Text to display as the label of the button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Disables the button.</td>
            <td>
              <Code table>false</Code>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <Code table>{`string | (React.ReactNode & React.SVGProps<SVGSVGElement>)`}</Code>
            </td>
            <td>Icon to display next to the button label.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <Code table>"left" | "right"</Code>
            </td>
            <td>Position of the icon in relation to the label.</td>
            <td>
              <Code table>"left"</Code>
            </td>
          </tr>
          <tr>
            <td>
              <Flex direction="column" gap={2}>
                <Badge color="yellow" title="This prop is mandatory.">
                  Required
                </Badge>
                onClick
              </Flex>
            </td>
            <td>
              <Code table>{`() => void`}</Code>
            </td>
            <td>Function to be invoked by clicking on the button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ref</td>
            <td>
              <Code table>{`React.RefObject<HTMLButtonElement>`}</Code>
            </td>
            <td>
              Reference to the internal <Code>button</Code> element.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>semantic</td>
            <td>
              <Code table>"default" | "danger" | "info" | "success" | "warning"</Code>
            </td>
            <td>Semantic type of the button.</td>
            <td>
              <Code table>"default"</Code>
            </td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <Code table>"button" | "submit" | "reset"</Code>
            </td>
            <td>
              HTML <Code>button</Code> type property.
            </td>
            <td>
              <Code table>"button"</Code>
            </td>
          </tr>
          <tr>
            <td>variant</td>
            <td>
              <Code table>"primary" | "outlined" | "text"</Code>
            </td>
            <td>Variant of the button.</td>
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
              <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/button/" newWindow>
                Button pattern
              </Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function ButtonPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Button</Heading>
        <Paragraph>
          Buttons are used to trigger actions or events. They are used to perform a specific action when clicked or
          pressed.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
