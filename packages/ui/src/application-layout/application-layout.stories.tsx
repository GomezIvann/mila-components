import ActionButton from "../action-button/action-button";
import Button from "../button/button";
import { breakpoints } from "../common/breakpoints";
import Flex from "../flex/flex";
import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import ApplicationLayout from "./application-layout";
import Footer from "./footer/footer";
import Header from "./header/header";
import SideNavigation from "./side-navigation/side-navigation";

export default {
  title: "Application layout",
  component: ApplicationLayout,
};

const appsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
  </svg>
);

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

const homeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
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

const headerLinks = [
  { label: "Home", href: "#", icon: homeIcon, selected: true },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "GitHub", href: "#", external: true },
];

const sideNavigationItems = [
  {
    items: [
      { label: "Home", href: "#", icon: homeIcon, selected: true },
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
        label: "Apps",
        icon: appsIcon,
        items: [
          { label: "App 1", href: "#" },
          { label: "App 2", href: "#" },
          { label: "App 3", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Social",
    items: [
      { label: "Facebook", href: "#", icon: facebookIcon, external: true },
      { label: "X", href: "#", icon: xIcon, external: true },
    ],
  },
  {
    items: [{ label: "GitHub", href: "#", external: true }],
  },
];

const title = {
  label: "Mila Components",
  href: "#",
  icon: (
    <svg viewBox="-17.5 -17.5 35 35" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <g transform="translate(-17.5 -17.5) scale(0.3431372549019608)">
        <g fill="#333">
          <rect x="1" y="1" width="100" height="100" rx="8" ry="8" vector-effect="non-scaling-stroke"></rect>
        </g>
      </g>
      <g transform="translate(-10.491587504457868 -11.61146034195226) scale(0.22222073402930465)">
        <g fill="#fff">
          <path d="M87.681 55.066c-2.364-5.685-6.373-10.247-10.251-14.659l-.277-.315c-3.886-4.423-7.238-8.458-8.904-13.053-1.706-4.708-1.114-9.624 1.51-12.525 1.366-1.509 3.717-2.444 5.987-2.403 1.014.022 2.892.274 4.077 1.705a3.555 3.555 0 0 0 5.476-4.532c-2.214-2.675-5.551-4.194-9.396-4.278-4.382-.105-8.641 1.676-11.414 4.74-4.434 4.901-5.553 12.455-2.922 19.715 2.088 5.762 5.876 10.348 10.246 15.322l.278.317c3.658 4.162 7.113 8.093 9.027 12.696 2.944 7.081 1.726 15.562-3.103 21.607-2.339 2.928-5.308 5.248-8.486 6.717 3.874-25.146-8.126-47.252-28.184-57.599a5.726 5.726 0 0 0-.474-.216c.721-1.498 1.151-3.093 1.151-4.749 0-2.459-.585-4.746-1.623-6.76.062-.185.099-.383.099-.596l.001-9.276a1.862 1.862 0 0 0-2.65-1.687l-7.823 3.657a17.252 17.252 0 0 0-3.924-.449c-1.363 0-2.686.157-3.948.454L14.32 5.237a1.862 1.862 0 0 0-2.65 1.687l.001 9.276c0 .233.045.449.118.648a14.703 14.703 0 0 0-1.592 6.708c0 5.32 4.401 10.014 8.802 12.823v53.147a4.772 4.772 0 0 0-1.737 3.688c0 2.323 7.397 2.194 9.181.692 1.538 1.829 9.301 1.212 9.301-.692a4.767 4.767 0 0 0-1.398-3.379V75.182c1.487 3.564 2.904 7.533 4.288 11.342.183.503.411.982.68 1.438a3.684 3.684 0 0 0-1.993 3.272v.075a3.687 3.687 0 0 0 3.687 3.687h16.325c.258 0 .509-.027.752-.077l.89.026a88.06 88.06 0 0 0 2.592.052c.934 0 1.842-.032 2.777-.13 7.115-.745 14.3-4.867 19.222-11.028 6.425-8.042 8.04-19.335 4.115-28.773zM27.578 89.832a4.79 4.79 0 0 0-1.072 1.653 4.78 4.78 0 0 0-.734-1.273V63.181c.218.113.443.22.677.321.382.164.758.392 1.128.668v25.662z"></path>
        </g>
      </g>
    </svg>
  ),
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
      <Header
        content={
          <Flex gap={8}>
            <Button onClick={() => {}}>Sign in</Button>
            <Button onClick={() => {}} variant="text">
              Sign up
            </Button>
          </Flex>
        }
        links={headerLinks}
        responsiveBreakpoint="md"
        title={title}
      />
    }
    sideNavigation={
      <SideNavigation items={sideNavigationItems} onNavigate={() => {}} title={title} responsiveBreakpoint="md" />
    }
    footer={
      <Footer
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
            title: "Facebook",
          },
          { icon: xIcon, href: "#", title: "X" },
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
