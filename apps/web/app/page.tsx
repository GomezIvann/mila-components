import type { Metadata } from "next";
import HomePage from "@/screens/home/home";

export const metadata: Metadata = {
  title: "Mila components",
  description: "Mila components is a humble library of reusable components developed as a final master thesis.",
};

export default function Home() {
  return <HomePage />;
}
