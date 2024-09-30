import InstallationPage from "@/screens/get-started/installation/installation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation - Mila components",
  description: "Learn how to install Mila components in your project.",
};

export default function Installation() {
  return <InstallationPage />;
}
