"use client";

import { Code, CodeBlock } from "@/common/custom-components/code/code";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { BulletedList, Flex, Heading, Paragraph, Table } from "mila-components";

const codeExample = `import { breakpoints } from "mila-components";

const App = () => {
  const { md } = breakpoints;

  return (
    <ApplicationLayout
      header={(
        <Header
          title={{ text: "Mila component library" }}
          links={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          responsiveBreakpoint={md}
        />
      )}
    />
  );
}`;

const sections = [
  {
    title: "Introduction",
    content: (
      <Paragraph>
        The layout of a web application plays a crucial role in determining the user experience. A well-designed layout
        can help users navigate the application more easily and find the information they need quickly. The Mila
        component library provides a set of layout components that can be used to build responsive web applications with
        a consistent look and feel. These components include containers, grids, and spacing utilities that help to
        organize the content on the page and create a visual hierarchy that guides users through the application. In
        this section, we will explore the key layout components provided by the Mila component library and how they can
        be used to create effective web applications.
      </Paragraph>
    ),
  },
  {
    title: "Application layout",
    content: (
      <>
        <Paragraph>
          The application layout is the foundation of the Mila component library. It provides a consistent structure for
          building web applications, ensuring that the content is organized in a logical and accessible way. The layout
          system is based on a 12-column grid, with flexible and fixed-width containers that adapt to different screen
          sizes. This allows for a responsive design that works well on a wide range of devices, from desktops to mobile
          phones.
        </Paragraph>
        <BulletedList>
          <li>
            <strong>Application layout:</strong> The main structure of the web application. The{" "}
            <Code>ApplicationLayout</Code> component provides a consistent layout for the header, side navigation, and
            content sections of the application.
          </li>
          <li>
            <strong>Header:</strong> The top section of the application layout, which typically contains the logo,
            navigation links, and user profile pictures, if applicable.
          </li>
          <li>
            <strong>Side navigation:</strong> The left-hand section of the application layout, which provides access to
            different sections of the application. It represents the primary navigation for the application and can be
            collapsed or expanded in responsive layouts.
          </li>
          <li>
            <strong>Footer:</strong> The bottom section of the application layout, which contains links to legal
            information and other resources.
          </li>
        </BulletedList>
      </>
    ),
  },
  {
    title: "Breakpoints",
    content: (
      <>
        <Paragraph>
          The Mila component library includes a set of predefined breakpoints that can be used to create responsive
          layouts. These breakpoints are based on common screen sizes and can be used to define the layout of components
          at different screen widths.
        </Paragraph>
        <Table>
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Size</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xs</td>
              <td>
                <Code>320px</Code>
              </td>
              <td>Small mobile devices.</td>
            </tr>
            <tr>
              <td>sm</td>
              <td>
                <Code>480px</Code>
              </td>
              <td>Large mobile devices.</td>
            </tr>
            <tr>
              <td>md</td>
              <td>
                <Code>768px</Code>
              </td>
              <td>Tablets.</td>
            </tr>
            <tr>
              <td>lg</td>
              <td>
                <Code>1024px</Code>
              </td>
              <td>Laptops.</td>
            </tr>
            <tr>
              <td>xl</td>
              <td>
                <Code>1280px</Code>
              </td>
              <td>Desktops.</td>
            </tr>
            <tr>
              <td>xxl</td>
              <td>
                <Code>1440px</Code>
              </td>
              <td>Modern large desktops.</td>
            </tr>
          </tbody>
        </Table>
      </>
    ),
  },
  {
    title: "Usage",
    subSections: [
      {
        title: "Mila components",
        content: (
          <>
            <Paragraph>
              The Mila component library provides a set of layout components that can be used to build web applications.
              These components include containers, grids, and spacing utilities that help to organize the content on the
              page and create a consistent visual hierarchy.
            </Paragraph>
            <BulletedList>
              <li>
                <strong>Flex:</strong> The <Code>Flex</Code> component allows you to build{" "}
                <strong>Flexible Box Module</strong> based layouts.
              </li>
            </BulletedList>
          </>
        ),
      },
      {
        title: "Breakpoints",
        content: (
          <>
            <Paragraph>
              To use the predefined breakpoints in your application, you can import the <Code>breakpoints</Code> object
              from the Mila component library and access the individual breakpoints as properties of the object.
            </Paragraph>
            <CodeBlock language="tsx">{codeExample}</CodeBlock>
          </>
        ),
      },
    ],
  },
];

export default function LayoutPage() {
  return (
    <Flex direction="column" gap={64}>
      <Heading level={1}>Layout</Heading>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
