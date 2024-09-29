import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import SiteApplicationLayout from "./common/components/application-layout";

export const metadata: Metadata = {
  title: "Mila components",
  description: "Mila components is a humble library of reusable components developed as a final master thesis.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SiteApplicationLayout>{children}</SiteApplicationLayout>
      </body>
    </html>
  );
}
