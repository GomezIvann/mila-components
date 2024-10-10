import { Badge, Flex } from "mila-components";

const code = `() => {
  return (
    <Flex gap={12} wrap="wrap">
      <Badge>Neutral</Badge>
      <Badge color="blue">New</Badge>
      <Badge color="green">Success</Badge>
      <Badge color="yellow">Warning</Badge>
      <Badge color="red">Error</Badge>
      <Badge color="purple">Info</Badge>
      <Badge color="orange">Attention</Badge>
    </Flex>
  );
}`;

const scope = {
  Badge,
  Flex,
};

export default { code, scope };
