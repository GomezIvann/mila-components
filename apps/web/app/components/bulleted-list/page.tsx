import BulletedListPage from "@/screens/components/bulleted-list/bulleted-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulleted list - Mila components",
  description: "Bulleted list component of the Mila component library.",
};

export default function Introduction() {
  return <BulletedListPage />;
}
