import { Button, Card, Flex, Paragraph } from "mila-components";

const code = `() => {
  return (
    <div style={{ width: "450px" }}>
      <Card
        actions={
          <Flex gap={8} justifyContent="flex-end">
            <Button onClick={() => {}}>
              Action
            </Button>
            <Button onClick={() => {}} variant="text">
              Learn more
            </Button>
          </Flex>
        }
        content={
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis architecto dignissimos. Sequi ut,
            blanditiis amet, cum deserunt, nihil saepe doloremque error nobis id itaque dicta culpa alias vel sint!
          </Paragraph>
        }
        media={{
          source: (
            <img
              src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
              alt="placeholder"
              width={500}
              height={300}
            />
          ),
        }}
        title="Card title"
      />
    </div>
  );
}`;

const scope = { Button, Card, Flex, Paragraph };

export default { code, scope };
