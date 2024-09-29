import { QuickNavigation } from "@gomezivann/mila-components";
import Section, { SectionType } from "../section";
import styles from "./quick-navigation.module.css";

type SiteQuickNavigationProps = {
  sections: SectionType[];
  startHeadingLevel?: 1 | 2 | 3 | 4 | 5;
  title?: string;
};

type LinkType = {
  label: string;
  links?: LinkType[];
};

const getSubSectionsLinks = (sections: SectionType[]) => {
  const linksList: LinkType[] = [];
  sections.map((section) => {
    if (section.subSections) {
      linksList.push({
        label: section.title,
        links: getSubSectionsLinks(section.subSections),
      });
    } else {
      linksList.push({ label: section.title });
    }
  });
  return linksList;
};

const SiteQuickNavigation = ({ sections, startHeadingLevel = 1, title }: SiteQuickNavigationProps): JSX.Element => (
  <div className={styles.mainContainer}>
    <div className={styles.sectionsContainer}>
      {sections.map((section) => (
        <Section
          key={`section-${section.title}`}
          title={section.title}
          level={startHeadingLevel}
          subSections={section.subSections}
          content={section.content}
        />
      ))}
    </div>
    <div className={styles.quickNavContainer}>
      <QuickNavigation title={title} links={getSubSectionsLinks(sections)} />
    </div>
  </div>
);

export default SiteQuickNavigation;