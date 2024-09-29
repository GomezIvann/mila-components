"use client";

import { BulletedList, Flex, Heading, Paragraph } from "@gomezivann/mila-components";
import colorPalette from "./images/color-palette.png";
import Image from "@/common/custom-components/image";
import SiteQuickNavigation from "@/common/custom-components/quick-navigation/quick-navigation";

const sections = [
  {
    title: "Introduction",
    content: (
      <Paragraph>
        The color system in this design library is based on the LCH color model (Lightness, Chroma, Hue), which allows
        for a more perceptually uniform representation of colors. This ensures that the color variations apply across
        different elements maintain consistent visual contrast, regardless of their brightness or saturation.
      </Paragraph>
    ),
  },
  {
    title: "Why LCH?",
    content: (
      <>
        <Paragraph>
          The <strong>LCH color model</strong> is particularly beneficial for modern UI design because it is based on
          human vision. Unlike other models like RGB or HSL, the LCH model enables us to achieve a more balanced color
          palette where equal changes in values result in equal perceptual shifts. This enhances accessibility, contrast
          management, and overall visual harmony.
        </Paragraph>
        <BulletedList>
          <li>
            <strong>Lightness (L)</strong> controls the perceived brightness.
          </li>
          <li>
            <strong>Chroma (C)</strong> refers to the intensity or purity of the color.
          </li>
          <li>
            <strong>Hue (H)</strong> represents the color family (e.g., red, blue, green).
          </li>
        </BulletedList>
        <Paragraph>
          This model gives us the flexibility to create a scalable color system that is both aesthetically pleasing and
          accessible to users with different visual abilities.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Color palette",
    content: (
      <>
        <Paragraph>
          We've created a versatile color palette that follows this principle, consisting of a spectrum of shades for
          each core color. These shades range from light to dark, ensuring sufficient contrast for text, backgrounds,
          and interactive elements.
        </Paragraph>
        <Image src={colorPalette} alt="Mila color palette" />
        <Paragraph>
          In our palette, each color family (e.g., grey, purple, blue, green, etc.) includes variations from{" "}
          <strong>100</strong> (lightest) to <strong>900</strong> (darkest). This enables designers and developers to
          easily apply the right level of contrast depending on the use case, whether it’s for foreground elements like
          text or background elements like containers.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Color tokens",
    content: (
      <>
        <Paragraph>
          Each color in the palette is associated with a core token, a hexadecimal value, and a visual preview. Tokens
          such as color-purple-500 or color-grey-300 represent reusable variables that simplify maintaining consistency
          across the interface. By using these tokens, developers can quickly adjust the colors across components,
          ensuring visual uniformity and easy updates when necessary.
        </Paragraph>
      </>
    ),
    subSections: [
      {
        title: "Examples of use",
        content: (
          <BulletedList>
            <li>
              <strong>Text and backgrounds.</strong> Use lighter shades (100 to 300) for backgrounds and darker shades
              (500 to 900) for text or important call-to-action buttons.
            </li>
            <li>
              <strong>Interactive elements.</strong> Mid-tones (400 to 600) are ideal for buttons, toggles, or
              interactive states, providing sufficient contrast against background elements.
            </li>
            <li>
              <strong>Feedback states.</strong> Brighter tones can be used sparingly for alerts, badges, or elements
              that require attention, ensuring that they stand out without overwhelming the design.
            </li>
          </BulletedList>
        ),
      },
    ],
  },
  {
    title: "Accessibility",
    content: (
      <>
        <Paragraph>
          By using the <strong>LCH model</strong> and offering a wide range of color intensities, the system supports
          <strong>color accessibility</strong> guidelines, ensuring that components meet the minimum contrast
          requirements (WCAG) for readability and usability. This makes the palette suitable for both standard and
          high-contrast themes.
        </Paragraph>
      </>
    ),
  },
];

export default function ColorPage() {
  return (
    <Flex direction="column" gap={64}>
      <Heading level={1}>Color</Heading>
      <SiteQuickNavigation sections={sections} startHeadingLevel={2} />
    </Flex>
  );
}
