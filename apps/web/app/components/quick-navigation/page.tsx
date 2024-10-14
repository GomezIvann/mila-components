import QuickNavigationPage from "@/screens/components/quick-navigation/quick-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick navigation - Mila components",
  description: "Quick navigation component of the Mila component library.",
};

export default function Introduction() {
  return <QuickNavigationPage />;
}
