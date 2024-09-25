"use client"

import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import { ApplicationLayout } from "@gomezivann/mila-components";

// export const metadata: Metadata = {
//   title: "Mila components",
//   description: "Mila components is a humble library of reusable components developed as a final master thesis.",
// };

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ApplicationLayout
          header={
            <ApplicationLayout.Header
              navigationLinks={[
                { label: "Home", href: "/" },
              ]}
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
            <ApplicationLayout.SideNavigation
              items={[
                {
                  label: "Home",
                  href: "/",
                },
              ]}
              onNavigate={() => {
                console.log("Navigate");
              }}
              title={{
                label: "Mila components",
              }}
            />
          }
          footer={
            <ApplicationLayout.Footer
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
function localFont(arg0: { src: string; variable: string; }) {
  throw new Error("Function not implemented.");
}

