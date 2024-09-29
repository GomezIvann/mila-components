"use client";

import { Footer } from "@gomezivann/mila-components";
import icons from "./icons";

export default function SiteFooter() {
  return (
    <Footer
      title={{ label: "Mila components" }}
      socialIcons={[
        {
          icon: icons.gitHub,
          href: "https://github.com/GomezIvann/mila-components",
          title: "GitHub",
        },
      ]}
      links={[
        {
          label: "GitHub",
          href: "https://github.com/GomezIvann",
        },
        {
          label: "Linkedin",
          href: "https://www.linkedin.com/in/ivan-gomez-pinta-a13720180/",
        },
      ]}
    />
  );
}
