import LinkPage from "@/screens/components/link/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link - Mila components",
  description: "Link component of the Mila component library.",
};

export default function Introduction() {
  return <LinkPage />;
}
