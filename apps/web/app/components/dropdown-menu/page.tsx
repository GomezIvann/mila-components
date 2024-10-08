import DropdownMenuPage from "@/screens/components/dropdown-menu/dropdown-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropdown menu - Mila components",
  description: "Dropdown menu component of the Mila component library.",
};

export default function Introduction() {
  return <DropdownMenuPage />;
}
