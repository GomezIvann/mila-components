"use client";

import { Header } from "@gomezivann/mila-components";
import { headerLinks } from "../pages-list";
import { usePathname, useRouter } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const handleOnNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <Header
      links={headerLinks.map((link) => ({
        ...link,
        selected: pathname === link.href,
      }))}
      responsiveBreakpoint="md"
      title={{
        label: "Mila components",
        href: "/",
      }}
      onNavigate={handleOnNavigate}
    />
  );
}
