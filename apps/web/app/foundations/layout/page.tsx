import LayoutPage from "@/screens/foundations/layout/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layout - Mila components",
  description: "Layout foundations of the Mila component library.",
};

export default function Layout() {
  return <LayoutPage />;
}
