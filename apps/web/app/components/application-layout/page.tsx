import ApplicationLayoutPage from "@/screens/components/application-layout/application-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application layout - Mila components",
  description: "Application layout component of the Mila component library.",
};

export default function Introduction() {
  return <ApplicationLayoutPage />;
}
