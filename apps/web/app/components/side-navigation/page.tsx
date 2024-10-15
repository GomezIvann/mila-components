import SideNavigationPage from "@/screens/components/side-navigation/side-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side navigation - Mila components",
  description: "Side navigation component of the Mila component library.",
};

export default function Introduction() {
  return <SideNavigationPage />;
}
