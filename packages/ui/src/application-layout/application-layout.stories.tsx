import ExampleContainer from "../../.storybook/utils/example-container";
import Button from "../button/button";
import Flex from "../flex/flex";
import ApplicationLayout from "./application-layout";

export default {
  title: "Application Layout",
  component: ApplicationLayout,
};

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export const Stories = () => (
  <>
    <ExampleContainer>
      <div style={{ border: "1px solid black" }}>
        <ApplicationLayout
          header={
            <ApplicationLayout.Header
              title={{ label: "Mila Components" }}
              navigationLinks={navigationLinks}
              content={
                <Flex gap="0.5rem">
                  <Button onClick={() => {}}>Sign in</Button>
                  <Button onClick={() => {}} variant="text">
                    Sign up
                  </Button>
                </Flex>
              }
            />
          }
          sideNavigation={
            <ApplicationLayout.SideNavigation>
              Side navigation
            </ApplicationLayout.SideNavigation>
          }
          footer={<ApplicationLayout.Footer>Footer</ApplicationLayout.Footer>}
        >
          Main content
        </ApplicationLayout>
      </div>
    </ExampleContainer>
  </>
);
