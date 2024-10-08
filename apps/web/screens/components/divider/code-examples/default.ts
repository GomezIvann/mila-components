import { Divider, Flex, Paragraph } from "mila-components";

const code = `() => {
  return (
    <Flex gap={12} direction="column">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Divider />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
    </Flex>
  );
}`;

const scope = { Divider, Flex, Paragraph };

export default { code, scope };
