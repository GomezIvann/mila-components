import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction - Mila components",
  description: "Welcome to the component library of my TFM.",
};

export default function Introduction() {
  return (
    <div>
      <h1>Introduction</h1>
      <p>Welcome to the component library of my TFM...</p>
    </div>
  );
}
