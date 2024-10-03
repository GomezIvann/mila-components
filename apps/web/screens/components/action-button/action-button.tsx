"use client";

import { Badge, Divider, Flex, Heading, Paragraph, Table } from "@gomezivann/mila-components";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/code/live-code-block";
import defaultExample from "./code-examples/default";

const sections = [
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
              <Code>string</Code>
            </td>
            <td>Text to display as the label of the action button.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <Code>boolean</Code>
            </td>
            <td>Disables the action button.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <Code>{`string | (React.ReactNode & React.SVGProps<SVGSVGElement>)`}</Code>
            </td>
            <td>Icon to display next to the action button label.</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <Code>"left" | "right"</Code>
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
              <Code>{`() => void`}</Code>
            </td>
            <td>Function to be invoked by clicking on the action button.</td>
          </tr>
          <tr>
            <td>ref</td>
            <td>
              <Code>{`React.RefObject<HTMLButtonElement>`}</Code>
            </td>
            <td>Reference to the internal <Code>button</Code> element.</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <Code>string</Code>
            </td>
            <td>
              Accessible text of the action button. It gives value to both screen readers and search engines. It is
              displayed as a tooltip when hovering over the action button.
            </td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <Code>"button" | "submit" | "reset"</Code>
            </td>
            <td>HTML button type.</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>
              <Code>"default" | "bordered"</Code>
            </td>
            <td>Action button variants.</td>
          </tr>
        </tbody>
      </Table>
    ),
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
