import { Flex, Heading, Paragraph } from "mila-components";

const code = `() => {
  return (
    <Flex direction="column" gap={24}>
      <Heading level={2}>Mila Components</Heading>
      <Paragraph>
        Mila components is a humble library of reusable components, based on React framework, developed as a final master thesis project.
      </Paragraph>
    </Flex>
  );
}`;

const scope = { Flex, Heading, Paragraph };

export default { code, scope };
