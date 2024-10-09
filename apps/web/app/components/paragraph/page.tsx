import ParagraphPage from "@/screens/components/paragraph/paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paragraph - Mila components",
  description: "Paragraph component of the Mila component library.",
};

export default function Introduction() {
  return <ParagraphPage />;
}
