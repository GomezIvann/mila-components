import ExampleContainer from "../../.storybook/utils/example-container";
import ActionButton from "../action-button/action-button";
import Button from "../button/button";
import { breakpoints } from "../common/breakpoints";
import Flex from "../flex/flex";
import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
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

const sideNavSections = [
  {
    items: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      {
        label: "Extra",
        items: [
          { label: "Extra 1", href: "#" },
          { label: "Extra 2", href: "#" },
        ],
      },
    ],
  },
];

const facebookIcon = (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    width="438.536px"
    height="438.536px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
  C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
  h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
  C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
  c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
  c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
      />
    </g>
  </svg>
);

const xIcon = (
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="40" fill="#0F1419" />
    <path
      d="M140.192 118.205L187.848 64H176.556L135.158 111.056L102.117 64H64L113.975 135.163L64 192H75.2914L118.982 142.296L153.883 192H192L140.192 118.205ZM124.722 135.787L119.65 128.697L79.3634 72.3294H96.7094L129.232 117.837L134.282 124.927L176.551 184.076H159.205L124.722 135.787Z"
      fill="white"
    />
  </svg>
);

const title = {
  label: "Mila Components",
  href: "#",
  icon: "https://i.pinimg.com/originals/4c/b2/bd/4cb2bd1dfcd2ff8a0952504f5907eeda.png",
};

const MainContent = () => (
  <div style={{ margin: "80px auto", maxWidth: "1124px", padding: "0px 5%" }}>
    <Flex direction="column" gap={40}>
      <Heading level={1}>Main content</Heading>
      <Flex direction="column" gap={24}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies aliquam. Nullam
          tincidunt, risus et varius tincidunt, nunc purus fermentum dolor, id tincidunt nunc nunc sit amet nunc. Nulla
          facilisi. Curabitur auctor, nunc non aliquam aliquet, ligula nunc ultricies purus, nec ultricies purus nunc
          nec nunc. Nullam nec purus nec nunc ultricies aliquam. Nullam tincidunt, risus et varius tincidunt, nunc purus
          fermentum dolor, id tincidunt nunc nunc sit amet nunc. Nulla facilisi. Curabitur auctor, nunc non aliquam
          aliquet, ligula nunc ultricies purus, nec ultricies purus nunc nec nunc.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies aliquam. Nullam
          tincidunt, risus et varius tincidunt, nunc purus fermentum dolor, id tincidunt nunc nunc sit amet nunc. Nulla
          facilisi. Curabitur auctor, nunc non aliquam aliquet, ligula nunc ultricies purus, nec ultricies purus nunc
          nec nunc. Nullam nec purus nec nunc ultricies aliquam. Nullam tincidunt, risus et varius tincidunt, nunc purus
          fermentum dolor, id tincidunt nunc nunc sit amet nunc. Nulla facilisi. Curabitur auctor, nunc non aliquam
          aliquet, ligula nunc ultricies purus, nec ultricies purus nunc nec nunc.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies aliquam. Nullam
          tincidunt, risus et varius tincidunt, nunc purus fermentum dolor, id tincidunt nunc nunc sit amet nunc. Nulla
          facilisi. Curabitur auctor, nunc non aliquam aliquet, ligula nunc ultricies purus, nec ultricies purus nunc
          nec nunc. Nullam nec purus nec nunc ultricies aliquam. Nullam tincidunt, risus et varius tincidunt, nunc purus
          fermentum dolor, id tincidunt nunc nunc sit amet nunc. Nulla facilisi. Curabitur auctor, nunc non aliquam
          aliquet, ligula nunc ultricies purus, nec ultricies purus nunc nec nunc.
        </Paragraph>
      </Flex>
    </Flex>
  </div>
);

export const Stories = () => (
  <ApplicationLayout
    header={
      <ApplicationLayout.Header
        content={
          <Flex gap={8}>
            <Button onClick={() => {}}>Sign in</Button>
            <Button onClick={() => {}} variant="text">
              Sign up
            </Button>
          </Flex>
        }
        navigationLinks={navigationLinks}
        responsiveBreakpoint="md"
        title={title}
      />
    }
    sideNavigation={<ApplicationLayout.SideNavigation items={sideNavSections} onNavigate={() => {}} title={title} />}
    footer={
      <ApplicationLayout.Footer
        content={
          <Flex gap={8}>
            <ActionButton onClick={() => {}}>Pricing</ActionButton>
            <ActionButton onClick={() => {}}>Contact</ActionButton>
            <ActionButton onClick={() => {}}>Resources</ActionButton>
          </Flex>
        }
        links={[
          { label: "Terms of service", href: "#" },
          { label: "Privacy policy", href: "#" },
        ]}
        socialIcons={[
          {
            icon: facebookIcon,
            href: "#",
          },
          { icon: xIcon, href: "#" },
        ]}
        title={title}
      />
    }
  >
    <MainContent />
  </ApplicationLayout>
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

export const Responsive: any = Stories.bind({});
Responsive.parameters = {
  viewport: { viewports: customViewports },
};
