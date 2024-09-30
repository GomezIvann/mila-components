import SiteHeading from "./heading/heading";
import { Flex } from "@gomezivann/mila-components";

type LevelEnum = 1 | 2 | 3 | 4 | 5;

export type SectionType = {
  title: string;
  level?: LevelEnum;
  subSections?: SectionType[];
  content?: React.ReactNode;
  navSubtitle?: string;
};

export default function Section({ title, level = 1, subSections, content, navSubtitle }: SectionType) {
  return (
    <Flex direction="column" gap={level === 1 ? 48 : level === 2 ? 32 : 24}>
      <SiteHeading level={level} navSubtitle={navSubtitle}>
        {title}
      </SiteHeading>
      {content}
      {subSections?.map((subSection) => (
        <Flex direction="column" key={subSection.title}>
          <Section
            key={`subSection-${subSection.title}`}
            title={subSection.title}
            level={(level + 1 <= 5 ? level + 1 : 5) as LevelEnum}
            subSections={subSection.subSections}
            content={subSection.content}
            navSubtitle={`${title} ${subSection.title}`}
          />
        </Flex>
      ))}
    </Flex>
  );
}
