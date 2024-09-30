"use client";

import { Heading, Flex, Button } from "@gomezivann/mila-components";
import styles from "./home.module.css";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Flex direction="column" gap={32} alignItems="center">
        <Heading>Welcome to Mila components</Heading>
        <Heading level={3}>
          Mila components is a humble library of reusable components, based on react framework, developed as a final
          master thesis project.
        </Heading>
        <Button
          onClick={() => {
            router.push("/get-started/introduction");
          }}
        >
          Get started
        </Button>
      </Flex>
    </div>
  );
}
