import CardPage from "@/screens/components/card/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Card - Mila components",
  description: "Card component of the Mila component library.",
};

export default function Introduction() {
  return <CardPage />;
}
