type LinkDetails = {
  label: string;
  href: string;
};
type LinkGroupDetails = {
  label: string;
  items: LinkDetails[];
};
type MainBlock = {
  href: string;
  title: string;
  links: (LinkDetails | LinkGroupDetails)[];
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

const componentsLinks: LinkGroupDetails[] = [
  {
    label: "Actions",
    items: [
      { label: "Action button", href: "/components/action-button" },
      { label: "Button", href: "/components/button" },
    ],
  },
  {
    label: "Data visualization",
    items: [{ label: "Table", href: "/components/table" }],
  },
  {
    label: "Layout",
    items: [
      { label: "Application layout", href: "/components/application-layout" },
      { label: "Divider", href: "/components/divider" },
      { label: "Flex", href: "/components/flex" },
      { label: "Footer", href: "/components/footer" },
      { label: "Header", href: "/components/header" },
      { label: "Side navigation", href: "/components/side-navigation" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { label: "Dropdown menu", href: "/components/dropdown-menu" },
      { label: "Link", href: "/components/link" },
      { label: "Quick navigation", href: "/components/quick-navigation" },
    ],
  },
  {
    label: "Text",
    items: [
      { label: "Bulleted list", href: "/components/bulleted-list" },
      { label: "Heading", href: "/components/heading" },
      { label: "Paragraph", href: "/components/paragraph" },
    ],
  },
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

export function getMainBlockFirstLink(block: MainBlock): string {
  const firstLinkMainBlock = mainBlocks.find((b) => b.title === block.title)?.links[0];
  const mainBlockLink =
    firstLinkMainBlock != null && "items" in firstLinkMainBlock
      ? firstLinkMainBlock.items[0]?.href
      : firstLinkMainBlock?.href;
  return mainBlockLink ?? "/";
}

export { componentsLinks, foundationsLinks, getStartedLinks, mainBlocks };
export type { LinkDetails, MainBlock };
