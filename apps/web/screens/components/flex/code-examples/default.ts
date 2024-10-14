import { Button, Flex, Heading, Paragraph, TextInput } from "mila-components";

const code = `() => (
  <Flex direction="column" gap={20}>
    <Heading level={2}>Hello, world!</Heading>
    <Paragraph>
      Mila components is a humble library of reusable components, based on React framework, developed as a final master thesis project.
    </Paragraph>
    <Flex gap={8} justifyContent="flex-end" wrap="wrap">
      <TextInput placeholder="Type something..." />  
      <Button type="submit">Submit</Button>
    </Flex>
  </Flex>
)`;

const scope = { Button, Flex, Heading, Paragraph, TextInput };

export default { code, scope };
