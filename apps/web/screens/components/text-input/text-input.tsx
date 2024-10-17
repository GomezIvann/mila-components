"use client";

import { BulletedList, Divider, Flex, Heading, Link, Paragraph, Table } from "mila-components";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Code } from "@/common/custom-components/code/code";
import LiveCodeBlock from "@/common/custom-components/live-code-block/live-code-block";
import defaultExample from "./code-examples/default";

const sections = [
  {
    title: "Usage",
    content: (
      <BulletedList>
        <li>
          Use descriptive labels to help users understand the purpose of the text input. Labels should be concise and
          clearly indicate what information is required.
        </li>
        <li>
          Use the <Code>ariaLabel</Code> prop to provide a label for the text input that is not visible on the screen.
          This approach is well supported by screen readers and other assistive technologies. However, unlike the title
          attribute (see below), this information is not conveyed to visual users. Therefore, it should only be used
          when the control's label is evident from the surrounding content, as shown in the button example below.
        </li>
        <li>
          Use the <Code>defaultValue</Code> prop to set the initial value of the text input when it is uncontrolled.
        </li>
        <li>
          Use the <Code>helpText</Code> prop to provide additional information about the text input. This information is
          displayed under the text input and can be used to provide context or guidance to users.
        </li>
        <li>
          Use the <Code>error</Code> prop to display an error message under the text input. This message should provide
          users with information about what went wrong and how to fix it.{" "}
          <strong>Error status is totally controlled by you</strong>.
        </li>
        <li>
          Use the props <Code>value</Code>, <Code>onChange</Code>, and <Code>onBlur</Code> to create a controlled text
          input field.
        </li>
        <li>
          By default, the text input is considered required. To indicate that the text input is optional, set the{" "}
          <Code>optional</Code> prop to <Code>true</Code>.
        </li>
        <li>
          Use the <Code>readOnly</Code> prop to prevent users from editing the text input. This is useful when
          displaying information that should not be changed, like a calculated value.
        </li>
        <li>
          Use the <Code>type</Code> prop to specify the type of the text input. Supported types include{" "}
          <Code>email</Code>, <Code>number</Code>, <Code>password</Code>, <Code>tel</Code>, <Code>text</Code>, and{" "}
          <Code>url</Code>. This types may have different behaviors and validation rules. Read more about them in the{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" newWindow>
            MDN web documentation
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
            <td>ariaLabel</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Label for the text input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>defaultValue</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Default value of the uncontrolled text input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Whether the text input is disabled.</td>
            <td>
              <Code table>false</Code>
            </td>
          </tr>
          <tr>
            <td>error</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Error message to display under the text input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>helpText</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Help text to display under the text input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Label for the text input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>name</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Name of the text input, which identifies the input when submitting the form.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>
              <Code table>{"(value: string) => void"}</Code>
            </td>
            <td>Function to be invoked when the text input loses focus.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <Code table>{"(value: string) => void"}</Code>
            </td>
            <td>Function to be invoked when the text input value changes.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>optional</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Whether the text input is optional. If true, will render an "(optional)" text next to the label.</td>
            <td>
              <Code table>false</Code>
            </td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Placeholder text to display in the text input when it is empty.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>readOnly</td>
            <td>
              <Code table>boolean</Code>
            </td>
            <td>Whether the text input is read-only.</td>
            <td>
              <Code table>false</Code>
            </td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <Code table>"email" | "number" | "password" | "tel" | "text" | "url"</Code>
            </td>
            <td>Type of the text input.</td>
            <td>
              <Code table>"text"</Code>
            </td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <Code table>string</Code>
            </td>
            <td>Value of the controlled text input.</td>
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
              <Link href="https://www.w3.org/WAI/tutorials/forms/labels/" newWindow>
                Labeling controls
              </Link>
            </li>
          </BulletedList>
        ),
      },
    ],
  },
];

export default function TextInputPage() {
  return (
    <Flex direction="column" gap={64}>
      <Flex direction="column" gap={40}>
        <Heading level={1}>Text input</Heading>
        <Paragraph>
          Text input fields allow users to enter text into a form. They can be used for a variety of purposes, such as
          entering a username, email address, or password.
        </Paragraph>
        <Divider />
      </Flex>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
