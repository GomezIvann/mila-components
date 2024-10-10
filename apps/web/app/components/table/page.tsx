import TablePage from "@/screens/components/table/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table - Mila components",
  description: "Table component of the Mila component library.",
};

export default function Introduction() {
  return <TablePage />;
}
