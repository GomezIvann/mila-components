import FlexPage from "@/screens/components/flex/flex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flex - Mila components",
  description: "Flex component of the Mila component library.",
};

export default function Introduction() {
  return <FlexPage />;
}
