import Link from "./link";
import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";

export default {
  title: "Link",
  component: Link,
};

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48px"
    viewBox="0 -960 960 960"
    width="48px"
    fill="currentColor"
  >
    <path d="M796-121 533-384q-30 26-69.96 40.5Q423.08-329 378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z" />
  </svg>
);

const catIconUrl =
  "https://i.pinimg.com/originals/4c/b2/bd/4cb2bd1dfcd2ff8a0952504f5907eeda.png";

export const Stories = () => (
  <>
    <ExampleContainer>
      <Heading level={3}>Default</Heading>
      <Link href="#">Link</Link>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>With SVG Icon</Heading>
      <Link href="#" icon={searchIcon}>
        Link
      </Link>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>With Image Icon</Heading>
      <Link href="#" icon={catIconUrl}>
        Link
      </Link>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Heading level={3}>Focused</Heading>
      <Link href="#">Link</Link>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Heading level={3}>Hovered</Heading>
      <Link href="#">Link</Link>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Heading level={3}>Active</Heading>
      <Link href="#">Link</Link>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-visited">
      <Heading level={3}>Visited</Heading>
      <Link href="#">Link</Link>
    </ExampleContainer>
    <ExampleContainer>
      <Heading level={3}>Disabled</Heading>
      <Link disabled href="#">
        Link
      </Link>
    </ExampleContainer>
  </>
);
