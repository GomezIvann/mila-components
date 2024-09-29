"use client";

import { usePathname, useRouter } from "next/navigation";
import { MainBlock, mainBlocks } from "../pages-list";
import { SideNavigation } from "@gomezivann/mila-components";
import { useMemo } from "react";

const useSideNavigation = (): MainBlock => {
  const pathname = usePathname();

  return useMemo(
    () => mainBlocks.find((block) => pathname.startsWith(block.href)) || { href: "", links: [], title: "" },
    [pathname]
  );
};

export default function SiteSideNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { title, links } = useSideNavigation();

  const handleOnNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <SideNavigation
      items={[
        {
          title,
          items: links.map((link) => ({
            label: link.label,
            href: link.href,
            selected: pathname === link.href,
          })),
        },
      ]}
      onNavigate={handleOnNavigate}
    />
  );
}
