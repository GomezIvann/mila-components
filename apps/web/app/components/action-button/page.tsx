import ActionButtonPage from "@/screens/components/action-button/action-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action button - Mila components",
  description: "Action button component of the Mila component library.",
};

export default function Introduction() {
  return (
    <ActionButtonPage />
  );
}
