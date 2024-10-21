import { useState } from "react";
import styles from "./code.module.css";
import { ActionButton } from "mila-components";
import icons from "../icons";

type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
};

type CodeProps = {
  children: React.ReactNode;
  table?: boolean;
};

export const CodeBlock = ({ children, language }: CodeBlockProps) => {
  const [copyActionIsVisible, setCopyActionIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const onMouseEnter = () => {
    setCopyActionIsVisible(true);
  };
  const onMouseLeave = () => {
    setCopyActionIsVisible(false);
    setCopied(false);
  };
  const copyCode = () => {
    navigator.clipboard.writeText(children as string).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className={styles.codeBlock} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {language && <span>{language}</span>}
      <pre>
        <code>{children}</code>
        {copyActionIsVisible && (
          <ActionButton icon={copied ? icons.copied : icons.copy} onClick={copyCode} title="Copy code" size="small" />
        )}
      </pre>
    </div>
  );
};

export const Code = ({ children, table }: CodeProps) => (
  <code className={table ? styles.tableCode : styles.code}>{children}</code>
);
