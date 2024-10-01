"use client";

import { Header } from "@gomezivann/mila-components";
import { getMainBlockFirstLink, mainBlocks } from "../pages-list";
import { usePathname, useRouter } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const handleOnNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <Header
      links={mainBlocks.map((block) => ({
        label: block.title,
        href: getMainBlockFirstLink(block) ?? "/",
        selected: pathname.startsWith(block.href),
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
