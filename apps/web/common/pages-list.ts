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
  { label: "Badge", href: "/components/badge" },
  { label: "Bulleted list", href: "/components/bulleted-list" },
  { label: "Button", href: "/components/button" },
  { label: "Divider", href: "/components/divider" },
  { label: "Dropdown menu", href: "/components/dropdown-menu" },
  { label: "Flex", href: "/components/flex" },
  { label: "Footer", href: "/components/footer" },
  { label: "Header", href: "/components/header" },
  { label: "Heading", href: "/components/heading" },
  { label: "Link", href: "/components/link" },
  { label: "Paragraph", href: "/components/paragraph" },
  { label: "Quick navigation", href: "/components/quick-navigation" },
  { label: "Side navigation", href: "/components/side-navigation" },
  { label: "Table", href: "/components/table" },
  { label: "Text input", href: "/components/text-input" },
];

const mainBlocks: MainBlock[] = [
  {
    href: "/get-started",
    links: getStartedLinks,
    title: "Get started",
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

export { componentsLinks, foundationsLinks, getStartedLinks, mainBlocks };
export type { LinkDetails, MainBlock };
