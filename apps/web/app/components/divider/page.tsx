import DividerPage from "@/screens/components/divider/divider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divider - Mila components",
  description: "Divider component of the Mila component library.",
};

export default function Introduction() {
  return <DividerPage />;
}
