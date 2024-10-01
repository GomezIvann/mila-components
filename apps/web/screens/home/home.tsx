"use client";

import { Heading, Flex, Button } from "@gomezivann/mila-components";
import styles from "./home.module.css";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Flex direction="column" gap={40} alignItems="center">
        <Heading>Welcome to Mila components</Heading>
        <Heading level={2} weight="light">
          Mila components is a humble library of reusable components, based on react framework, developed as a final
          master thesis project.
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
            onClick={() => {
              router.push("/get-started/introduction");
            }}
            variant="outlined"
          >
            Learn
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
