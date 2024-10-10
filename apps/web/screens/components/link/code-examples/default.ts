import { Flex, Link, Paragraph } from "mila-components";
import NextLink from "next/link";

const code = `() => {
  return (
    <Flex direction="column" gap={20}>
      <NextLink href="/" passHref legacyBehavior>
        <Link>Go to Mila components home page</Link>
      </NextLink>
      <Paragraph>
        Mila components is a humble library of reusable components, 
        based on{" "}
        <Link href="https://react.dev/" newWindow>
          React
        </Link>, 
        developed as a final master thesis project.
      </Paragraph>
    </Flex>
  );
}`;

const scope = { Flex, Link, NextLink, Paragraph };

export default { code, scope };
