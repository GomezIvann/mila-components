import HeaderPage from "@/screens/components/header/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Header - Mila components",
  description: "Header component of the Mila component library.",
};

export default function Introduction() {
  return <HeaderPage />;
}
