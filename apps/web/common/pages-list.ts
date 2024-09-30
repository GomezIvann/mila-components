type LinkDetails = {
  label: string;
  href: string;
};
type MainBlock = {
  href: string;
  title: string;
  links: LinkDetails[];
};

const getStartedLinks: LinkDetails[] = [
  { label: "Introduction", href: "/get-started/introduction" },
  { label: "Installation", href: "/get-started/installation" },
];

const foundationsLinks: LinkDetails[] = [
  { label: "Color", href: "/foundations/color" },
  { label: "Layout", href: "/foundations/layout" },
  { label: "Spacing", href: "/foundations/spacing" },
  { label: "Typography", href: "/foundations/typography" },
];

const componentsLinks: LinkDetails[] = [
  { label: "Action button", href: "/components/action-button" },
  { label: "Application layout", href: "/components/application-layout" },
  { label: "Button", href: "/components/button" },
  { label: "Divider", href: "/components/divider" },
  { label: "Dropdown menu", href: "/components/dropdown-menu" },
  { label: "Header", href: "/components/header" },
  { label: "Link", href: "/components/link" },
  { label: "Footer", href: "/components/header" },
  { label: "Paragraph", href: "/components/paragraph" },
  { label: "Quick nav", href: "/components/quick-nav" },
];

const mainBlocks: MainBlock[] = [
  {
    href: "/get-started",
    links: getStartedLinks,
    title: "Get Started",
  },
  {
    href: "/foundations",
    links: foundationsLinks,
    title: "Foundations",
  },
  {
    href: "/components",
    links: componentsLinks,
    title: "Components",
  },
];

export { mainBlocks, getStartedLinks, foundationsLinks, componentsLinks };
export type { LinkDetails, MainBlock };
