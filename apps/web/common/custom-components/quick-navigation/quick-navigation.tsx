import { QuickNavigation } from "mila-components";
import Section from "./section";
import styles from "./quick-navigation.module.css";
import { LinkType, SectionType, SiteQuickNavigationProps } from "./types";

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

export default function SiteQuickNavigation({ sections, startHeadingLevel = 1, title = "On this page" }: SiteQuickNavigationProps) {
  return (
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
      <div className={styles.quickNavigationContainer}>
        <QuickNavigation title={title} links={getSubSectionsLinks(sections)} />
      </div>
    </div>
  );
}
