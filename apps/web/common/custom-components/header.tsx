"use client";

import { Header } from "@gomezivann/mila-components";
import { mainBlocks } from "../pages-list";
import { usePathname, useRouter } from "next/navigation";
import Image from "./image";
import milaIcon from "../assets/mila-icon.svg";
import milaLogo from "../assets/mila-logo.png";

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
        href: block.href,
        selected: pathname.startsWith(block.href),
      }))}
      responsiveBreakpoint="md"
      title={{
        href: "/",
        icon: (
          <>
            <Image src={milaIcon} alt="Mila components icon" />
            <Image src={milaLogo} alt="Mila components logo" />
          </>
        ),
      }}
      onNavigate={handleOnNavigate}
    />
  );
}
