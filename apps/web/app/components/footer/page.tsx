import FooterPage from "@/screens/components/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Footer - Mila components",
  description: "Footer component of the Mila component library.",
};

export default function Introduction() {
  return <FooterPage />;
}
