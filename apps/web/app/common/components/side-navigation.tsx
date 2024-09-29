"use client";

import { usePathname, useRouter } from "next/navigation";
import { componentsLinks, foundationsLinks, getStartedLinks } from "../pages-list";
import { SideNavigation } from "@gomezivann/mila-components";
import { useMemo } from "react";

const useSideNavigation = () => {
  const pathname = usePathname();

  return useMemo(() => {
    if (pathname.startsWith("/components")) return { title: "Components", links: componentsLinks };
    else if (pathname.startsWith("/foundations")) return { title: "Foundations", links: foundationsLinks };
    else if (pathname.startsWith("/get-started")) return { title: "Get started", links: getStartedLinks };
    else return { title: "", links: [] };
  }, [pathname]);
};

export default function SiteSideNavigation() {
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
            active: usePathname() === link.href,
          })),
        },
      ]}
      onNavigate={handleOnNavigate}
    />
  );
}
