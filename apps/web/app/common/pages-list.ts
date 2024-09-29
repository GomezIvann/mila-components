type LinkDetails = {
  label: string;
  href: string;
};

const headerLinks = [
  { label: "Get started", href: "/get-started" },
  { label: "Foundations", href: "/foundations" },
  { label: "Components", href: "/components" },
];

const getStartedLinks: LinkDetails[] = [
  { label: "Introduction", href: "/get-started/introduction" },
  { label: "Installation", href: "/get-started/installation" },
];

const foundationsLinks: LinkDetails[] = [
  { label: "Color", href: "/foundations/color" },
  { label: "Typography", href: "/foundations/typography" },
  { label: "Spacing", href: "/foundations/spacing" },
  { label: "Breakpoints", href: "/foundations/breakpoints" },
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

export { headerLinks, getStartedLinks, foundationsLinks, componentsLinks };
export type { LinkDetails };
