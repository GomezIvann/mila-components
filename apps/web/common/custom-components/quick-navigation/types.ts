export type SiteHeadingProps = {
  children: string;
  level?: LevelEnum;
  navSubtitle?: string;
};

export type LinkType = {
  label: string;
  links?: LinkType[];
};

export type LevelEnum = 1 | 2 | 3 | 4 | 5;

export type SectionType = {
  content?: React.ReactNode;
  level?: LevelEnum;
  navSubtitle?: string;
  subSections?: SectionType[];
  title: string;
};

export type SiteQuickNavigationProps = {
  sections: SectionType[];
  startHeadingLevel?: 1 | 2 | 3 | 4 | 5;
  title?: string;
};
