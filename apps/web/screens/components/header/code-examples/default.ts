import { Button, Flex, Header } from "mila-components";

const code = `() => {
  return (
    <Header
      content={
        <Flex gap={8}>
          <Button onClick={() => {}}>Sign in</Button>
          <Button onClick={() => {}} variant="text">
            Sign up
          </Button>
        </Flex>
      }
      links={[
        { label: "Home", href: "#", selected: true },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "GitHub", href: "#", external: true },
      ]}
      responsiveBreakpoint="xl"
      title={{ text: "Mila", href: "#" }}
      onNavigate={(href) => { 
        alert(href);
      }}
    />
  );
}`;

const scope = { Button, Flex, Header };

export default { code, scope };
