"use client";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ApplicationLayout, Footer, Header, SideNavigation } from "@gomezivann/mila-components";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Mila components",
//   description: "Mila components is a humble library of reusable components developed as a final master thesis.",
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ApplicationLayout
          header={
            <Header
              links={[{ label: "Home", href: "/", selected: pathname === "/" }]}
              onNavigate={() => {
                console.log("Navigate");
              }}
              responsiveBreakpoint="md"
              title={{
                label: "Mila components",
                href: "/",
              }}
            />
          }
          sideNavigation={
            <SideNavigation
              items={[
                {
                  label: "Home",
                  href: "/",
                  selected: pathname === "/",
                },
              ]}
              onNavigate={() => {
                console.log("Navigate");
              }}
              responsiveBreakpoint="md"
              title={{
                label: "Mila components",
              }}
            />
          }
          footer={
            <Footer
              links={[
                { label: "Terms of service", href: "#" },
                { label: "Privacy policy", href: "#" },
              ]}
              title={{
                label: "Mila components",
              }}
            />
          }
        >
          {children}
        </ApplicationLayout>
      </body>
    </html>
  );
}
