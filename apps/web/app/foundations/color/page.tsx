import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color - Mila components",
  description: "Color foundations of the Mila component library.",
};

const ColorPage: React.FC = () => {
  return (
    <div>
      <h1>Color Foundations</h1>
      <p>
        Welcome to the color foundations page. Here you can find information about our color palette and guidelines.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ backgroundColor: "#FF5733", width: "100px", height: "100px" }}></div>
        <div style={{ backgroundColor: "#33FF57", width: "100px", height: "100px" }}></div>
        <div style={{ backgroundColor: "#3357FF", width: "100px", height: "100px" }}></div>
      </div>
    </div>
  );
};

export default ColorPage;
