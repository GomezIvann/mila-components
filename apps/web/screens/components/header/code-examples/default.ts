import { Button, Flex, Header } from "mila-components";

const code = `() => {
  const homeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
    </svg>
  );

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
        { label: "Home", href: "#", icon: homeIcon, selected: true },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "GitHub", href: "#", external: true },
      ]}
      responsiveBreakpoint="xl"
      title={{ text: "Mila", href: "#" }}
    />
  );
}`;

const scope = { Button, Flex, Header };

export default { code, scope };
