import BadgePage from "@/screens/components/badge/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badge - Mila components",
  description: "Badge component of the Mila component library.",
};

export default function Introduction() {
  return <BadgePage />;
}
