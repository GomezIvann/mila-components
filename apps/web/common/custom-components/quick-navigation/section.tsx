import SiteHeading from "./heading/heading";
import { Flex } from "mila-components";
import { LevelEnum, SectionType } from "./types";

export default function Section({ content, level = 1, navSubtitle, subSections, title }: SectionType) {
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
