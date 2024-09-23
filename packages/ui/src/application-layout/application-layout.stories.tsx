import ExampleContainer from "../../.storybook/utils/example-container";
import Button from "../button/button";
import { breakpoints } from "../common/breakpoints";
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
                <Flex gap={8}>
                  <Button onClick={() => {}}>Sign in</Button>
                  <Button onClick={() => {}} variant="text">
                    Sign up
                  </Button>
                </Flex>
              }
            />
          }
          sideNavigation={<ApplicationLayout.SideNavigation>Side navigation</ApplicationLayout.SideNavigation>}
          footer={
            <ApplicationLayout.Footer
              title={{
                label: "Mila Components",
                href: "#",
              }}
              copyright="© 2024 Mila Components"
              links={[
                { label: "Terms of service", href: "#" },
                { label: "Privacy policy", href: "#" },
              ]}
              socialIcons={[
                { icon: "https://cdn-icons-png.flaticon.com/256/124/124010.png", href: "#" },
                {
                  icon: "https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid",
                  href: "#",
                },
                { icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png", href: "#" },
              ]}
            />
          }
        >
          Main content
        </ApplicationLayout>
      </div>
    </ExampleContainer>
  </>
);

export const Responsive = () => (
  <ExampleContainer>
    <div style={{ border: "1px solid black" }}>
      <ApplicationLayout
        header={
          <ApplicationLayout.Header
            navigationLinks={navigationLinks}
            responsiveBreakpoint="md"
            title={{ label: "Mila components" }}
          />
        }
        sideNavigation={<ApplicationLayout.SideNavigation>Side navigation</ApplicationLayout.SideNavigation>}
        footer={
          <ApplicationLayout.Footer
            title={{
              label: "Mila Components",
              href: "#",
            }}
            copyright="© 2024 Mila Components"
            links={[
              { label: "Terms of service", href: "#" },
              { label: "Privacy policy", href: "#" },
            ]}
            socialIcons={[
              { icon: "https://cdn-icons-png.flaticon.com/256/124/124010.png", href: "#" },
              {
                icon: "https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid",
                href: "#",
              },
              { icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png", href: "#" },
            ]}
          />
        }
      >
        Main content
      </ApplicationLayout>
    </div>
  </ExampleContainer>
);

const customViewports = {
  resizedScreen: {
    name: "Custom viewport",
    styles: {
      width: breakpoints.sm,
      height: breakpoints.md,
    },
  },
};

Responsive.parameters = {
  viewport: { viewports: customViewports },
};
