import { Metadata } from "next";
import IntroductionPage from "@/screens/get-started/introduction/introduction";

export const metadata: Metadata = {
  title: "Introduction - Mila components",
  description: "Welcome to the component library of my TFM.",
};

export default function Introduction() {
  return (
    <IntroductionPage />
  );
}
