"use client";

import { Badge, BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/live-code-block/live-code-block";
import defaultExample from "./code-examples/default";

const sections = [
  {
    title: "Usage",
    content: (
      <BulletedList>
        <li>Use cards to group related elements in a single block.</li>
        <li>Use the different sections of the card to display information in a structured and organized way.</li>
        <li>Use the actions section to display buttons or other interactive elements.</li>
        <li>
          Use the content section to display text or other non-interactive elements, related to the main information of
          the card.
        </li>
        <li>Use the media section to display images or videos related to the content of the card.</li>
        <li>The title of the card should be a brief description of the main information displayed in the card.</li>
        <li>
          Use the <Code>onClick</Code> prop to make the card interactive. If present, the card will be clickable, adding
          a hover effect and a pointer cursor, as well as being focusable.
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
            <td>actions</td>
            <td>
              <Code table>React.ReactNode</Code>
            </td>
            <td>Actions sections to be displayed at the bottom of the Card.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>content</td>
            <td>
              <Code table>React.ReactNode</Code>
            </td>
            <td>Content to be displayed at the center of the Card.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>media</td>
            <td>
              <Code table>{`{ position?: "top" | "right" | "bottom" | "left"; source: React.ReactNode }`}</Code>
            </td>
            <td>Media to be displayed at the top, right, bottom, or left of the card.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <Code table>{"() => void"}</Code>
            </td>
            <td>
              Function to be executed when the card is clicked. If not present, the component will not be interactive.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Title of the card.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>
              <Code table>"default" | "outlined"</Code>
            </td>
            <td>Variant of the card.</td>
            <td>
              <Code table>"default"</Code>
            </td>
          </tr>
        </tbody>
      </Table>
    ),
  },
];

export default function CardPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Card</Heading>
        <Paragraph>
          The card component is a container that groups related elements in a single block. It can contain a title,
          media (image or video), content, and actions. The card component is used to display information in a
          structured and organized way.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
