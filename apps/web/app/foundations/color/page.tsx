import ColorPage from "@/screens/foundations/color/color";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color - Mila components",
  description: "Color foundations of the Mila component library.",
};

export default function Color() {
  return <ColorPage />;
}
