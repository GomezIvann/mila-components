import slugify from "slugify";
import { Heading } from "@gomezivann/mila-components";
import styles from "./heading.module.css";

type SiteHeadingProps = {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5;
  navSubtitle?: string;
};

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
        <svg aria-hidden="true" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
          ></path>
        </svg>
      </a>
      <Heading level={level}>{children}</Heading>
    </div>
  );
}
