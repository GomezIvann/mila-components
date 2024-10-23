import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteApplicationLayout from "../common/custom-components/application-layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SiteApplicationLayout>
          <div className="main">{children}</div>
        </SiteApplicationLayout>
        <Analytics />
      </body>
    </html>
  );
}
