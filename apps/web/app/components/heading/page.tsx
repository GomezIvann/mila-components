import HeadingPage from "@/screens/components/heading/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heading - Mila components",
  description: "Heading component of the Mila component library.",
};

export default function Introduction() {
  return <HeadingPage />;
}
