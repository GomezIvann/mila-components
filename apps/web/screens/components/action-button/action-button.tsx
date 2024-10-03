"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "@gomezivann/mila-components";
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
          The action button component is accessible by default. It is important to provide a meaningful{" "}
          <Code>title</Code> prop to the action button to give value to both screen readers and search engines. The{" "}
          <Code>title</Code> prop is displayed as a tooltip when hovering over the action button.
        </li>
        <li>
          Use the <Code>icon</Code> prop to display an icon next to the action button label. The <Code>icon</Code> prop
          can be a string, for URLs, or a SVG element.
        </li>
        <li>
          Use <Code>type</Code> prop carefully. The default value is <Code>button</Code>, but you can change it to{" "}
          <Code>submit</Code> or <Code>reset</Code> if needed. To know more about the differences between these types,{" "}
          check the{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type">MDN documentation</Link>.
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>children</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Text to display as the label of the action button.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Disables the action button.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <Code table>{`string | (React.ReactNode & React.SVGProps<SVGSVGElement>)`}</Code>
            </td>
            <td>Icon to display next to the action button label.</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <Code table>"left" | "right"</Code>
            </td>
            <td>Position of the icon.</td>
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
            <td>Function to be invoked by clicking on the action button.</td>
          </tr>
          <tr>
            <td>ref</td>
            <td>
              <Code table>{`React.RefObject<HTMLButtonElement>`}</Code>
            </td>
            <td>
              Reference to the internal <Code>button</Code> element.
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>
              Accessible text of the action button. It gives value to both screen readers and search engines. It is
              displayed as a tooltip when hovering over the action button.
            </td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <Code table>"button" | "submit" | "reset"</Code>
            </td>
            <td>HTML button type.</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>
              <Code table>"default" | "bordered"</Code>
            </td>
            <td>Action button variants.</td>
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
              <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/button/" newWindow>Button pattern</Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function ActionButtonPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Action button</Heading>
        <Paragraph>
          The action buttons enable users to perform an action. They are typically used for task-related options within
          a workflow and are well-suited for interfaces where buttons are not intended to be highly attention-grabbing.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
