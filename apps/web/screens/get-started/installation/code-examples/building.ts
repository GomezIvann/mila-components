import { Button, Flex, Heading, Paragraph, Link } from "mila-components";

const code = `() => (
  <Flex direction="column" gap={16}>
    <Heading level={2}>
      Getting started with Mila components
    </Heading>
    <Paragraph>
      Mila components are a collection of React components 
      that you can use to build your applications.
    </Paragraph>
    <Flex alignItems="center" gap={24}>
      <Button onClick={() => alert("Mila!")}>
        Get started
      </Button>
      <Link href="https://github.com/GomezIvann/mila-components" newWindow>
        GitHub
      </Link>
    </Flex>
  </Flex>
);`;

const scope = {
  Button,
  Flex,
  Heading,
  Paragraph,
  Link,
};

export default { code, scope };
