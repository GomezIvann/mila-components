"use client";

import { ApplicationLayout } from "@gomezivann/mila-components";
import SiteHeader from "./header";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import SiteSideNavigation from "./side-navigation";
import SiteFooter from "./footer";

export default function SiteApplicationLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasSideNavigation = useMemo(() => pathname !== "/", [pathname]);

  return (
    <ApplicationLayout
      header={<SiteHeader />}
      sideNavigation={hasSideNavigation && <SiteSideNavigation />}
      footer={<SiteFooter />}
    >
      {children}
    </ApplicationLayout>
  );
}
