"use client";

import { Heading, Flex, Button, Card, Paragraph } from "mila-components";
import styles from "./home.module.css";
import { useRouter } from "next/navigation";
import Image from "@/common/custom-components/image";
import cardComponentsImage from "@/common/assets/card-components.jpg";
import cardFoundationsImage from "@/common/assets/card-foundations.jpg";
import icons from "@/common/custom-components/icons";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Flex direction="column" gap={64}>
        <Flex direction="column" gap={40} alignItems="center">
          <Heading>Welcome to Mila components</Heading>
          <Heading level={2} weight="light">
            Mila components is a humble library of reusable components, based on React, developed as a final master
            thesis project.
          </Heading>
          <Flex gap={20}>
            <Button
              onClick={() => {
                router.push("/get-started/introduction");
              }}
            >
              Get started
            </Button>
            <Button
              icon={icons.gitHub}
              onClick={() => {
                window.open("https://github.com/GomezIvann/mila-components", "_blank");
              }}
              variant="text"
            >
              GitHub
            </Button>
          </Flex>
        </Flex>
        <Flex gap={32} wrap="wrap">
          <Flex grow={1} basis="300px">
            <Card
              media={{
                source: (
                  <Image src={cardComponentsImage} alt="Components card image" width={300} height={200} fill priority />
                ),
              }}
              title="Components"
              content={<Paragraph>Explore the mila components and learn how to use them in your projects.</Paragraph>}
              onClick={() => {
                router.push("/components");
              }}
              variant="outlined"
            />
          </Flex>
          <Flex grow={1} basis="300px">
            <Card
              media={{
                source: (
                  <Image
                    src={cardFoundationsImage}
                    alt="Foundations card image"
                    width={300}
                    height={200}
                    fill
                    priority
                  />
                ),
              }}
              title="Foundations"
              content={
                <Paragraph>
                  Learn about the design principles and guidelines that were followed to develop this library.
                </Paragraph>
              }
              onClick={() => {
                router.push("/foundations");
              }}
              variant="outlined"
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
