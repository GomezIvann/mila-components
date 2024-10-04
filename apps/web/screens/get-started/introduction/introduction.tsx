"use client";

import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";
import { Flex, Heading, Link, Paragraph } from "mila-components";
import NextLink from "next/link";

const sections = [
  {
    title: "What is Mila?",
    content: (
      <>
        <Paragraph>
          Mila components is a humble library of reusable components, based on{" "}
          <Link href="https://react.dev/" newWindow>
            React
          </Link>{" "}
          framework, developed as a final master thesis project.
        </Paragraph>
        <Paragraph>
          The main goal of this project is to provide a set of components that can be easily reused in any project, with
          a focus on accessibility and usability, while also providing a consistent design, so our users can focus on
          building their projects.
        </Paragraph>
      </>
    ),
    subSections: [
      {
        title: "Why Mila?",
        content: (
          <Paragraph>
            <em>Mila</em> is a stray cat who has made her home in a meadow near my house in Asturias. She has been there
            since I began my master's degree, and I wanted to dedicate this project to her.
          </Paragraph>
        ),
      },
    ],
  },
  {
    title: "What is this documentation?",
    content: (
      <>
        <Paragraph>
          This documentation site is your go-to place for understanding Mila components. Here you can find information
          about the components, how to use them, examples, how they where built, our core foundations and much more.
        </Paragraph>
        <Paragraph>
          It is fully built using Mila components, so you can see how the components look and behave in a real-world
          scenario.
        </Paragraph>
        <Paragraph>
          We hope you find this documentation useful and that it helps you to build your projects with ease and
          confidence.
        </Paragraph>
      </>
    ),
    subSections: [
      {
        title: "Components",
        content: (
          <>
            <Paragraph>
              Mila components is a collection of reusable components that you can use in your projects. The components
              are designed to be easy to use, customizable, and accessible.
            </Paragraph>
            <Paragraph>
              You can find a list of all available components in the{" "}
              <NextLink href="/components/action-button" passHref legacyBehavior>
                <Link>Components</Link>
              </NextLink>{" "}
              section.
            </Paragraph>
          </>
        ),
      },
      {
        title: "Design foundations",
        content: (
          <>
            <Paragraph>
              Mila components is built on top of a set of{" "}
              <NextLink href="/foundations" passHref legacyBehavior>
                <Link>design foundations</Link>
              </NextLink>{" "}
              that guide the development of the components.
            </Paragraph>
            <Paragraph>
              These design principles include color contrast, typography, spacing, and accessibility which are applied
              consistently across all components. Our aim is to also provide this design choices to our users so they
              can build their projects with a consistent design. This can be achieve thanks to our core tokens that are
              available to be used in your projects.
            </Paragraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Help and support",
    content: (
      <>
        <Paragraph>Help is always welcome!</Paragraph>
        <Paragraph>
          If you have any questions, suggestions, or feedback, feel free to reach us on our{" "}
          <Link href="https://github.com/GomezIvann/mila-components">GitHub repository</Link>.
        </Paragraph>
      </>
    ),
  },
];

export default function IntroductionPage() {
  return (
    <Flex direction="column" gap={64}>
      <Heading level={1}>Introduction</Heading>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
