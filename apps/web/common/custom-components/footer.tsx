"use client";

import { Footer } from "mila-components";
import icons from "./icons";
import Image from "./image";
import milaLogo from "../assets/mila-logo.png";

export default function SiteFooter() {
  return (
    <Footer
      copyright="© 2024 GomezIvann"
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
      socialIcons={[
        {
          icon: icons.gitHub,
          href: "https://github.com/GomezIvann/mila-components",
          title: "GitHub",
        },
      ]}
      title={{ icon: <Image src={milaLogo} alt="Mila components logo" priority /> }}
    />
  );
}
