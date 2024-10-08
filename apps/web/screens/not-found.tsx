"use client";

import { Flex, Heading, Button } from "mila-components";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <Flex direction="column" gap={32} alignItems="center" justifyContent="center">
      <Flex direction="column" gap={12} alignItems="center" justifyContent="center">
        <Heading>404 - Page Not Found</Heading>
        <Heading level={2} weight="light">
          Sorry, the page you are looking for does not exist.
        </Heading>
      </Flex>
      <Button onClick={() => router.push("/")}>Go to Home</Button>
    </Flex>
  );
}
