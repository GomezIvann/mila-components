import slugify from "slugify";
import { Heading } from "@gomezivann/mila-components";
import styles from "./heading.module.css";
import icons from "../../icons";
import { SiteHeadingProps } from "../types";

export default function SiteHeading({ children, level, navSubtitle }: SiteHeadingProps) {
  const elementId = slugify(navSubtitle ?? children, { lower: true });

  return (
    <div className={styles.headingContainer} id={elementId}>
      <a
        className={styles.headingAnchor}
        href={`#${elementId}`}
        title={`Go to '${children}'`}
        aria-label={`Go to the section '${children}'`}
      >
        {icons.link}
      </a>
      <Heading level={level}>{children}</Heading>
    </div>
  );
}
