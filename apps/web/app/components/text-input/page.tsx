import TextInputPage from "@/screens/components/text-input/text-input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text input - Mila components",
  description: "Text input component of the Mila component library.",
};

export default function Introduction() {
  return <TextInputPage />;
}
