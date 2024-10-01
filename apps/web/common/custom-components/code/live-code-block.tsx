import { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styles from "./live-code-block.module.css";
import { LiveCodeBlockProps } from "./types";
import theme from "./live-code-block-theme";
import { Button, Flex } from "@gomezivann/mila-components";

export default function LiveCodeBlock({ example }: LiveCodeBlockProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(example.code)
      .then(() => {
        alert("Code copied to the clipboard! 🚀");
      })
      .catch((err) => {
        console.error("Failed to copy the text to clipboard: ", err);
      });
  };

  return (
    <Flex direction="column" gap={16}>
      <Flex gap={4}>
        <LiveProvider code={example.code} scope={example.scope} theme={theme}>
          <LivePreview className={styles.preview} />
          <LiveError />
          {isOpen && <LiveEditor />}
        </LiveProvider>
      </Flex>
      <Flex gap={12} justifyContent="flex-end">
        <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Hide code" : "Show code"}</Button>
        <Button onClick={handleCopy} variant="text">
          Copy code
        </Button>
      </Flex>
    </Flex>
  );
}
