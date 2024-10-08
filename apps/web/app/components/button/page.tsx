import ButtonPage from "@/screens/components/button/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button - Mila components",
  description: "Button component of the Mila component library.",
};

export default function Introduction() {
  return <ButtonPage />;
}
