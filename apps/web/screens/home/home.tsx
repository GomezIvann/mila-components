"use client";

import Link from "next/link";
import { Heading, Paragraph, Link as MilaLink, Flex } from "@gomezivann/mila-components";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <Flex direction="column" gap={32} alignItems="center">
      <Heading>Welcome to Mila components</Heading>
      <Heading level={3}>
        Mila components is a humble library of reusable components, based on react framework, developed as a final
        master thesis project.
      </Heading>
      <Flex direction="column" gap={8} alignItems="center">
        <Paragraph>Start now:</Paragraph>
        <ul className={styles.linkList}>
          <li>
            <Link href="/get-started" passHref legacyBehavior>
              <MilaLink>Get started</MilaLink>
            </Link>
          </li>
          <li>
            <Link href="/foundations" passHref legacyBehavior>
              <MilaLink>Foundations</MilaLink>
            </Link>
          </li>
          <li>
            <Link href="/components" passHref legacyBehavior>
              <MilaLink>Components</MilaLink>
            </Link>
          </li>
        </ul>
      </Flex>
    </Flex>
  );
}
